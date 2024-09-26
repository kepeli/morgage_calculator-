import React from "react";


export interface ICalculator {
  principal: string;
  setPrincipal: React.Dispatch<React.SetStateAction<string>>;
  year: string;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  interestRate: string;
  setInterestRate: React.Dispatch<React.SetStateAction<string>>;
  monthlyPayment: string;
  setMonthlyPayment: React.Dispatch<React.SetStateAction<string>>;
  totalMonthlyPayment: string;
  setTotalMonthlyPayment: React.Dispatch<React.SetStateAction<string>>;
  display: boolean | undefined;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>
  bgColor: string;
  setBGColor: React.Dispatch<React.SetStateAction<string>>
}

export interface IMorgageInput {
  label: string;
  // bgColor: string;
}

export interface IMorgageSecondInput {
  label: string;
  symbol: string;
  value: string;
  state: React.Dispatch<React.SetStateAction<string>>;
}

export interface ICalculateMonthlyPayments {
  principal: string;
  year: string;
  interestRate: string;
  setMonthlyPayment: React.Dispatch<React.SetStateAction<string>>;
  setTotalMonthlyPayment: React.Dispatch<React.SetStateAction<string>>;
}