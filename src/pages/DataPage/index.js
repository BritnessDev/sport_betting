import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout'
import { getSportData, postSportData } from '../../servicies/sport.services';
import TableComponent from '../../components/DataTable';
import { apiConfig } from '../../data/data';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';

const DataPage = () => {
    const [tableData, setTableData] = useState({});
    const [pageNum, setPageNum] = useState(1)
    const [isLoding, setIsLoading] = useState(true)
    const [ssection, setSsection] = useState('')
    
    const [search, setSearch] = useState({})
    const [tempSearch, setTempSearch] = useState({})

    const { sportsection } = useParams()

    const [id, setId] = useState(-1)
    const [tempID, setTempID] = useState(-1)

    const [secondid, setSecondid] = useState('')
    
    //click search button
    const selectBtnClick = () => {
        if(sportsection === "events-by-sportid-date"){
            setId(tempSearch.sport_id);
            setSecondid(tempSearch.date);
        }else if(sportsection === "h2h-events-by-teamid"){
            setId(tempSearch.teams);
            setSecondid(tempSearch.h2h_events);
        }else setSearch(tempSearch)
    }

    //click okBtn
    const okBtnClick = () => {
        setId(tempID)
    }

    //search input value changes
    const setInputValue = (value, field) => {
        let searchCopy = {...tempSearch};

        // update the field value
        searchCopy[field] = value;

        // update the search state
        setTempSearch(searchCopy);
        
    }

    const prevButtonClick = () => {
        if (pageNum > 1) {
            setPageNum(pageNum - 1);
        }
    }

    const nextButtonClick = () => {
        setPageNum(pageNum + 1);
    }
    
    const apiName = apiConfig[sportsection].name
    const type = apiConfig[sportsection].type 
    const fields = apiConfig[sportsection].fields

    useEffect(() => {
 
        if(id !== -1) {
            if(apiName.includes('search')){
                const postData = async () => {

                    setIsLoading(true)

                    try{
                        console.log(search)
                        let response = await postSportData(pageNum, apiName, search)
                        setTableData(response.data);
                    } catch (err){
                        enqueueSnackbar('There is no data for this sportid.', { variant: 'error' })
                        setTableData({})
                    }
                    setIsLoading(false);
                }
                postData()
            }else {
                const getData = async () => {
                    setIsLoading(true);
                    try{
                        let response = await getSportData(pageNum, apiName, id, type, secondid)
                        setTableData(response.data);
                    } catch (err){
                        enqueueSnackbar('There is no data for this ID.', { variant: 'error' })
                        setTableData({})
                    }
                    setIsLoading(false);
                }
                getData();
            }
        }
    }, [pageNum, id, ssection, search, secondid])

    useEffect(() => {
        setSsection(sportsection)
        if(sportsection.includes('list')){
            setId(null);
            setTempID(null)
        }else {
            setId(1); 
            setTempID(1)
        }

        setPageNum(1)
        setTempSearch({})
        setSearch({})
        setSecondid(null)

        //initialize input value of fields
        const inputs = document.querySelectorAll("input[type='text']");
        inputs.forEach((input) => {
            input.value = '';
        });

    }, [sportsection])

    return (
        <Layout>
            <SnackbarProvider />
            <div className="py-5 mx-auto text-center">
                <span className=" text-[30px]">{apiConfig[sportsection].description}</span>
            </div>
            <div className="flex gap-4 justify-center">
                <button className="py-3 px-5 bg-gray-500 text-white rounded-lg hover:opacity-[0.8] transition ease-in-out" onClick={prevButtonClick}>Prev</button>
                <button className="py-3 px-5 bg-gray-500 text-white rounded-lg hover:opacity-[0.8] transition ease-in-out" onClick={nextButtonClick}>Next</button>
            </div>
            {
                type && (type !== "events/date" && type !== "h2h-events" && !type.includes('search')) &&(
                <div className="py-3 mx-auto w-[70%] flex justify-center">
                    <div className="flex border-purple-200 ">
                        <input
                            value={tempID ? tempID : ''}
                            type="text"
                            className="block w-full px-2 py-2 mr-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="ID..."
                            onChange={(e) => setTempID(e.target.value)}
                        />
                        <button className="mx-2 px-4 text-white bg-purple-600 border-l rounded" onClick={() =>okBtnClick()}>
                            Select
                        </button>
                    </div>
                    <span className="text-[20px] flex items-center">Input ID</span>
                </div>
                )
            }
            {/* data */}
            {
                (sportsection.includes("data"))&& (
                    <div className="py-3 mx-auto w-[70%] flex justify-center">
                        <div className="flex border-purple-200">
                            <input
                                value={tempID ? tempID : ''}
                                type="text"
                                className="block w-full px-2 py-2 mr-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="ID..."
                                onChange={(e) => setTempID(e.target.value)}
                            />
                            <button className="mx-2 px-4 text-white bg-purple-600 border-l rounded" onClick={() =>okBtnClick()}>
                                Select
                            </button>
                        </div>
                        <span className="text-[20px] flex items-center">Input Data ID</span>
                     </div>
                )
            }
            {
                fields && (
                    <div className="py-3 w-[70%] mx-auto">
                        <div className="flex flex-wrap border-purple-200 justify-center">
                            {fields.map((item, index) => (    
                                <input
                                    key = {index}
                                    type="text"
                                    className="block px-2 py-2 my-2 mx-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    placeholder={item}
                                    onChange={(e) => setInputValue(e.target.value, item)}
                                />
                                    
                            ))}
                        </div>
                        <button className="mx-auto px-2 py-2 flex justify-center w-[70%] text-white bg-purple-600 border-l rounded"     onClick={() =>selectBtnClick()}>
                            Select
                        </button>
                    </div>
                ) 
            }
            <div className="w-full overflow-x-auto px-10 mt-5 h-[800px]">
                { !isLoding ? <TableComponent tableData={tableData} /> :
                    <div className="text-center">
                        <div role="status">
                            <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                        </div>
                    </div>
                }
            </div>
        </Layout>
    )
}

export default DataPage
