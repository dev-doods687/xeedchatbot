from langchain_community.llms import OpenAI
from pydantic import BaseModel, Field
from langchain.tools import BaseTool
from typing import Type
from langchain.schema import SystemMessage
from langchain_community.chat_models import ChatOpenAI
from langchain.agents import initialize_agent
from langchain.agents import AgentType
from langchain.tools import Tool
from datetime import date
import pandas as pd

import os

def get_agent():
    year = date.today().year
    print(f'YEAR={year}')
    system_message = SystemMessage(
    content=f"You are an expert on the company's finances. By default the company you will provide information for is Xurpas.\
        Please make sure you complete the objective above with the following rules:\
        1/ Your job is to first breakdown the topic into relevant questions for understanding the topic in detail. You should have at max only 3 questions not more than that, in case there are more than 3 questions consider only the first 3 questions and ignore the others.\
        2/ You should use finance_tool to get more information about the topic. You are allowed to use the search tool only 3 times in this process.\
        3/ If asked for multiple items, query them one by one using the tools provided.\
        4/ If not asked for a specific time period, assume the year {year}.\
        5/ Aggregate all the answers that you can get on this topic.\
        6/ Ouput DataFrame data as an HTML table.")
    tools = [
        FinanceTool(),
    ]
    agent_kwargs = {
        "system_message": system_message,
    }
    llm = ChatOpenAI(temperature=0, model="gpt-4", verbose=True)
    agent = initialize_agent(
        tools,
        llm,
        agent=AgentType.OPENAI_FUNCTIONS,
        verbose=True,
        agent_kwargs=agent_kwargs,
    )

    return agent

class FinanceInput(BaseModel):
    """Inputs for get_content function"""
    company: str = Field(description="The company that you want to query information on")
    attr: str = Field(description="The attribute that you want to query")
    start_date: date = Field(description="The start date of the attribute that you want to query")
    end_date: date = Field(description="The end date of the attribute that you want to query")


class FinanceTool(BaseTool):
    name = "finance_tool"
    description = "useful when you need to get financial data for companes Xurpas and CTX"
    args_schema: Type[BaseModel] = FinanceInput

    def get_content(self, company, attr='', start_date=None, end_date=None):
        company = company.lower()
        attr = attr.lower()
        print(f'FinanceTool COMPANY = {company}, START DATE={start_date} END DATE={end_date}')
        if company == 'xurpas':
            if attr == 'full name' or attr == 'name':
                return 'Xurpas'
            if attr == 'ebitda':
                return '10 million'
            if attr == 'net profit':
                return '100 million'
            if attr == 'assets':
                data = [1,2,3,4,5,6,7,8,9,10,11,12]
                return pd.DataFrame(data=data)
        
            
        if company == 'ctx':
            if attr == 'full name' or attr == 'name':
                return 'CTX Technologies'
            if attr == 'ebitda':
                return '100 million'
            if attr == 'net profit':
                return '1 billion'
            if attr == 'assets':
                if start_date.year == 2023: 
                    data = [123,6546,4366,76567,653,9283,7344,8234,932,101,11232,21342]
                elif start_date.year == 2022: 
                    data = [23444,546357,767,56787,8787,8787,87578,63456,456765,5666,76599,21343]
                else:
                    data = [8967,89877,4456,1122,452345,3565,345656,45656,4522,42234,45666,687766]
                return pd.DataFrame(data=data)

    def _run(self, company: str, attr: str, start_date: date, end_date : date):
        return self.get_content(company, attr, start_date, end_date)

    def _arun(self, cpmpany: str , attr: str):
        raise NotImplementedError("error here")
    