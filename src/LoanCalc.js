import React, {useState} from 'react';
import LoanJS from 'loanjs'

const LoanCalc = () => {

    const [amount, setAmount] = useState('')
    const [rate, setRate] = useState('')
    const [term, setTerm] = useState('')

    const[installments, setInstalments] = useState([])

    const handleSubmit = () =>{
        calculate(amount, term , rate)
    }

    function calculate(amount, years, rate){
        const loan = new LoanJS.Loan(amount, years * 12, rate)
        setInstalments(loan.installments)
    }

    return (
        <div>
           <h1>Loan calculator</h1>

                    Loan Amount
                    <div>
                        <input type='number' value={amount}
                               onChange={(event)=>setAmount(event.target.value)}/>
                    </div>

                    Interest Rate
                    <div>
                        <input type='number' value={rate}
                               onChange={(event)=>setRate(event.target.value)}/>
                    </div>

                    Loan Term (years)
                    <div>
                        <input type='number' value={term}
                               onChange={(event)=>setTerm(event.target.value)}/>
                    </div>

               <button onClick={handleSubmit}>Calculate</button>

            <hr/>

            {!installments.length ||
                <table>
                <thead>
                <tr>
                    <th>Month</th>
                    <th>Payment Amount</th>
                    <th>Interest Paid</th>
                    <th>Principal Paid</th>
                    <th>Remain</th>
                </tr>
                </thead>

                <tbody>
                {installments.map((el, index) => (
                <tr key={index}>
                    <td>{index}</td>
                    <td>${el.installment}</td>
                    <td>${el.interest}</td>
                    <td>${el.capital.toFixed(2)}</td>
                    <td>${el.remain.toFixed(2)}</td>
                </tr>
                    ))}
                </tbody>
            </table>
            }
        </div>


    );
};

export default LoanCalc;