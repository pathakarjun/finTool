"use client";
import { useState } from "react";

export default function HomePage() {
	const formData = {
		loanAmount: 0,
		anuualInterest: 0,
		loanPeriod: 0,
		prepayPenalty: 0,
		additionalPayments: 0,
	};
	const [data, setData] = useState(formData);

	const handleChange = (e: any) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	return (
		<div>
			<label>
				Loan Amount :
				<input
					placeholder="Loan Amount"
					value={data.loanAmount}
					name="loanAmount"
					id="loanAmount"
					onChange={handleChange}
				/>
			</label>
			<label>
				Annual interest rate :
				<input
					placeholder="Annual interest rate"
					value={data.anuualInterest}
					name="anuualInterest"
					id="anuualInterest"
					onChange={handleChange}
				/>
			</label>
			<label>
				Loan period in years :
				<input
					placeholder="Loan period in years"
					value={data.loanPeriod}
					name="loanPeriod"
					id="loanPeriod"
					onChange={handleChange}
				/>
			</label>
			<label>
				Prepayment penalty :
				<input
					placeholder="Prepayment penalty"
					value={data.prepayPenalty}
					name="prepayPenalty"
					id="prepayPenalty"
					onChange={handleChange}
				/>
			</label>
			<label>
				Additional payment :
				<input
					placeholder="Additional payment"
					value={data.additionalPayments}
					name="additionalPayments"
					id="additionalPayments"
					onChange={handleChange}
				/>
			</label>
		</div>
	);
}
