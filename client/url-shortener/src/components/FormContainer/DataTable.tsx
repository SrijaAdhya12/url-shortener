import * as React from "react";
import { UrlData } from "../../interface/UrlData";
import { Link } from "react-router-dom";
import { serverUrl } from "../helpers/Constants";
// import axios from "axios";

interface IDataTableProps {
	data: UrlData[];
}

const DataTable: React.FunctionComponent<IDataTableProps> = (props) => {
	const { data } = props;
	console.log("Data in data table is", data);
	const renderTableData = () => {
		return data.map((item) => {
			return (
				<tr
					key={item._id}
					className="border-b text-white bg-gray-600 hover:bg-white hover:text-gray-800"
				>
					<td className="px-6 py-3 break-words">
						<Link to={item.fullUrl} target="_blank" rel="noreferrer noopener">
							{item.fullUrl}
						</Link>
					</td>
					<td className="px-6 py-3 break-words">
						<Link
							to={`${serverUrl}/shortUrl/${item.shortUrl}`}
							target="_blank"
							rel="noreferrer noopener"
						>
							{item.shortUrl}
						</Link>
					</td>
					<td className="px-6 py-3">{item.clicks}</td>
					<td className="px-6 py-3">
						<button onClick={() => copyToClipboard(item.shortUrl)}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
								/>
							</svg>
						</button>
					</td>
				</tr>
			);
		});
	};
	const copyToClipboard = async (url: string) => {
		try {
			await navigator.clipboard.writeText(`${serverUrl}/shortUrl/${url}`);
			alert(`URL copied: ${serverUrl}/shortUrl/${url}`);
		} catch (error) {
			console.log(error);
		}
	};

	// const deleteUrl = async (id: string) => {
	//     const response = await axios.delete(`${serverUrl}/shortUrl/${id}`)
	//     console.log(response)
	// }
	return (
		<div className="container mx-auto pt-2 pb-10">
			<div className="relative overflow-x-auto shadow-sm sm:rounded-lg">
				<table className="w-full table-fixed text-sm text-left rtl:text-right text-gray-500">
					<thead className="text-md uppercase text-gray-50 bg-gray-700">
						<tr>
							<th scope="col" className="px-6 py-3 w-3/12">
								FullUrl
							</th>
							<th scope="col" className="px-6 py-3 w-3/12">
								ShortUrl
							</th>
							<th scope="col" className="px-6 py-3 w-6/12">
								Click
							</th>
							<th scope="col" className="px-6 py-3 w-6/12">
								Action
							</th>
						</tr>
					</thead>
					<tbody>{renderTableData()}</tbody>
				</table>
			</div>
		</div>
	);
};

export default DataTable;
