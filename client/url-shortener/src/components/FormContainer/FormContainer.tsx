import * as React from "react";
import axios from "axios"
import { serverUrl } from "../helpers/Constants";

interface IAppProps {}

const FormContainer: React.FunctionComponent<IAppProps> = () => {
    const [fullUrl, setFullUrl] = React.useState<string>("")
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await axios.post(`${serverUrl}/shorturl`, {
                fullUrl: fullUrl
            })
            setFullUrl("")
        } catch (error) {
            console.log(error)
        }
    }
	return (
		<div className="container mx-auto p-2 bg-black">
			<h2 className="text-white text-4xl test-center pb-4">URL Shortener</h2>
			<div>
				<p className="text-white text-center pb-2 text-xl font-extralight">
					Paste your untidy link to shorten it
				</p>
				<p className="text-white text-center pb-4 text-sm font-thin">
					Free tool to shorten a URL or reduce link,{" "}
				</p>
			</div>

			<form onSubmit={handleSubmit}>
				<div className="flex">
					<div className="relative w-full">
						<div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slate-800">urlshortener.link</div>
						<input
							type="text"
							placeholder="add your link"
							required
                            className="block w-full p-4 ps-32 test-sm text-gray-900 border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 outline-none"
                            value={fullUrl}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setFullUrl(e.target.value)}
                        />
                        <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-lg border border-blue-700 focus: ring-4 focus:outline-none focus:ring-blue">Shorten URL</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default FormContainer;
