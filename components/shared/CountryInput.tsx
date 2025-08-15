"use client"

import { useState } from "react"
import { CitySelect, CountrySelect, StateSelect } from "react-country-state-city"
import "react-country-state-city/dist/react-country-state-city.css"
import { Input } from "../ui/input"

type CountryProps = {
	userCountry?: string
	userState?: string
	userCity?: string
}

export default function CountryInput({ userCity = "", userState = "", userCountry = "" }: CountryProps) {
	/* -------------------------------- useState -------------------------------- */
	const [country, setCountry] = useState<any>(userCountry)
	const [state, setState] = useState<any>(userState)
	const [city, setCity] = useState<any>(userCity)

	return (
		<div className="flex flex-col gap-4">
			<Input type="hidden" name="country" value={country?.name ?? country} />
			<Input type="hidden" name="state" value={state?.name ?? state} />
			<Input type="hidden" name="city" value={city?.name ?? city} />

			<CountrySelect
				containerClassName="form-group"
				inputClassName="bg-background text-foreground"
				onChange={(_country) => {
					setCountry(_country)
				}}
				defaultValue={country}
				placeHolder={country ? country : "Country"}
			/>

			<StateSelect
				inputClassName="bg-background text-foreground"
				countryid={country?.id}
				containerClassName="form-group"
				onChange={(_state) => setState(_state)}
				defaultValue={state}
				placeHolder={state ? state : "State"}
			/>
			<CitySelect
				inputClassName="bg-background text-foreground"
				countryid={country?.id}
				stateid={state?.id}
				onChange={(_city) => setCity(_city)}
				// defaultValue={city}
				placeHolder={city ? city : "City"}
			/>
		</div>
	)
}
