import * as React from 'react';
import FormContainer from './FormContainer/FormContainer';
import { UrlData } from '../interface/UrlData';
import axios from 'axios';
import { serverUrl } from './helpers/Constants';

interface IAppProps {
}

const Container: React.FunctionComponent<IAppProps> = () => {
    const [data, setData] = React.useState<UrlData>();
    const fetchTableData = async () => {
        const response = await axios.get(`${serverUrl}/shortUrl`)
        console.log("The response from the server is", response)
        setData(response.data)
        console.log(data)
    }

    React.useEffect(() => {
        fetchTableData()
    }, [])

    return (
        <div>
            <FormContainer/>
      </div>
  );
};

export default Container;
