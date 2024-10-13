import React, { useState, useEffect,useRef } from "react";
import axios from "axios";
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import './../assets/styles/test.css';
import { register } from "swiper/element/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";

/*
検索キーワードの状態
検索キーワードを更新する関数を持つ関数
*/


register();


//ここがビュー
function Usage() {
    return (
        <>
        <main>
        <swiper-container style={
            {
            "--swiper-navigation-color": "#fff", 
            "--swiper-pagination-color": "#fff"
            }
        } 
        pagination-clickable="true" 
        navigation="true" 
        className="mySwiper"
        slides-per-view={1}
        >
                <swiper-slide lazy="true">
                    <img src="https://mezamashi.media/_next/image?url=https%3A%2F%2Fp.potaufeu.asahi.com%2Ffd00-p%2Fpicture%2F28143810%2Fc7b7e217f95e61ed59a6ef0896f2ca97.jpg&w=3840&q=75" loading="lazy" alt="" />
                </swiper-slide>
    
                <swiper-slide lazy="true">
                    <img loading="lazy" src="https://pbs.twimg.com/amplify_video_thumb/1833458586875531264/img/N8y33pXzm4H_5YI7?format=jpg&name=large" alt="" />
                </swiper-slide>
    
                <swiper-slide lazy="true">
                    <img loading="lazy" src="https://mezamashi.media/_next/image?url=https%3A%2F%2Fp.potaufeu.asahi.com%2Ffd00-p%2Fpicture%2F28143810%2Fc7b7e217f95e61ed59a6ef0896f2ca97.jpg&w=3840&q=75" alt="" />
                </swiper-slide>
    
                <swiper-slide lazy="true">
                    <img loading="lazy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuesxyGF4y95IDkiHlPUzKXcMpVhUAyH_JWDUGA7L1q0WGc0Rul4M5xrgsGY1w5y-bdVA&usqp=CAU" alt="" />
                </swiper-slide>
    
                <swiper-slide lazy="true">
                        <img loading="lazy" src="https://source.unsplash.com/turned-on-ipad-Im8ylpB8SpI" alt="" />
                </swiper-slide>
            </swiper-container>
        </main>
        </>
    )
    }


function CustomizedInputBase({onSearch}) {
    const [searchValue, setSearchValue] = useState(''); // 検索キーワードの状態
    const handleSearch = async (e) => {
        e.preventDefault(); // フォームのデフォルトの挙動を防ぐ
        onSearch(searchValue); // 親コンポーネントに検索キーワードを渡す   関数がこの文字列を保持してくれるということ
    };
    return (
        <div className="input-container">
            <Paper
                component="form"
                sx={{ 
                    p: 0, 
                    display: 'flex', 
                    alignItems: 'center', 
                    minWidth: '90%', 
                    backgroundColor: '#ffffff', 
                    borderRadius: '4px'  
                }}
                size="small"
                onSubmit={handleSearch}
            >
                <InputBase
                    sx={{ 
                        ml: 1, 
                        flex: 1, 
                        padding: '0px', 
                        paddingLeft: '10px', 
                        paddingTop: '5px', 
                        paddingBottom: '2px', 
                    }}
                    placeholder="キーワードで検索"
                    inputProps={{ 'aria-label': 'キーワードで検索' }}
                    value={searchValue} // 検索キーワードの状態を反映
                    onChange={(e) => setSearchValue(e.target.value)} // 入力を更新
                />
                <IconButton 
                    type="submit" 
                    sx={{ 
                        p: 0, 
                        backgroundColor: '#283A70', 
                        color: 'white', 
                        width: '40px', 
                        height: '40px', 
                        borderTopRightRadius: '4px', 
                        borderBottomRightRadius: '4px', 
                        borderTopLeftRadius: '0.1px', 
                        borderBottomLeftRadius: '0.1px', 
                        '&:hover': {
                            backgroundColor: '#303f9f', 
                        },
                    }} 
                    aria-label="search"
                >
                    <SearchIcon />
                </IconButton>
            </Paper>
        </div>
    );
}



// ScrollObserver Component
const ScrollObserver = () => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const scrollAreaRef = useRef(null);
    const targetAreaRef = useRef(null);
  
    useEffect(() => {
      const scrollArea = scrollAreaRef.current;
      const targetArea = targetAreaRef.current;
  
      const options = {
        root: scrollArea,
      };
  
      const callback = (entries) => {
        entries.forEach(entry => {
          setIsIntersecting(entry.isIntersecting);
        });
      };
  
      const observerObject = new IntersectionObserver(callback, options);
      if (targetArea) observerObject.observe(targetArea);
  
      return () => {
        if (targetArea) observerObject.unobserve(targetArea);
      };
    }, []);
  
    return (
      <div>
        <div id="checkArea">Intersection: {isIntersecting ? 'True' : 'False'}</div>
  
        <div
          id="scrollArea"
          ref={scrollAreaRef}
          style={{
            width: '300px',
            height: '200px',
            overflowY: 'scroll',
            border: '2px dashed black',
            margin: '20px 0',
          }}
        >
            <div style={{ height: '1000px' }}></div>
          <div
            id="targetArea"
            ref={targetAreaRef}
            style={{
              width: '100%',
              height: '15px',
              backgroundColor: 'red',
              marginTop: '150px',
              color: 'white',
              padding: '10px',
              textAlign: 'center',
            }}
          >
            これが<br />表示されると<br />trueになるよ
          </div>
        </div>
      </div>
    );
  };
  
  // Test Component
  const Test = () => {
    const [companies, setCompanies] = useState([]); 
    const [filteredCompanies, setFilteredCompanies] = useState([]);
  
    // Fetch company data
    const fetchCompanies = async () => {
      try {
        const res = await axios.get("http://localhost:3010/companies");
        setCompanies(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    useEffect(() => {
      fetchCompanies(); 
    }, []);
  
    // Search handler
    const handleSearch = async (searchKeyword) => {
      if (!searchKeyword) return;
  
      try {
        const res = await axios.get(`http://localhost:3010/?name=${searchKeyword}`);
        setFilteredCompanies(res.data); 
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };
  
    return (
      <div>
        <h1>Test</h1>
  
        {/* Search component */}
        <CustomizedInputBase onSearch={handleSearch} />
  
        {/* Display filtered companies */}
        <ul>
          {filteredCompanies.length > 0 ? (
            filteredCompanies.map((company) => (
              <li key={company.id}>{company.name}</li> 
            ))
          ) : (
            <p>No results found</p>
          )}
        </ul>
  
        {/* Usage and ScrollObserver */}
        <Usage />
        <ScrollObserver />
      </div>
    );
  };



// const Test = () => {
//     const [companies, setCompanies] = useState([]); //撮ってきた情報の格納先
//     const [filteredCompanies, setFilteredCompanies] = useState([]); // 検索結果の状態

//     // 会社情報を取得する関数
//     const fetchCompanies = async () => {
//         try {
//             const res = await axios.get("http://localhost:3010/companies");
//             setCompanies(res.data);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     };

//     useEffect(() => {
//         fetchCompanies(); // コンポーネントがマウントされたときにデータを取得
//     }, []);

//     //実際に検索を行う関数
//     const handleSearch = async (searchKeyword) => {
//         if (!searchKeyword) {
//             console.log("No keyword provided");
//             // setFilteredCompanies(companies);  // If no keyword, show all companies
//             return;
//         }
//         try {
//             const res = await axios.get(`http://localhost:3010/companies?name=${searchKeyword}`);
//             //サーバー側で定義した関数で検索を行い、その結果を取得する
//             setFilteredCompanies(res.data);  // Update the filtered companies list
//             console.log(res.data);  
//         } catch (error) {
//             console.error("Error fetching search results:", error);
//         }
//     };

//     return (
//         <div>
//             <h1>Test</h1>
//             {/* 検索コンポーネントにより、検索する関数のみ異なる */}
//             <CustomizedInputBase onSearch={handleSearch} />
//             {/* 関数が実行されてAPIサーバが撮ってきたデータを表示 */}
//             <ul>
//                 {filteredCompanies.length > 0 ? (
//                     filteredCompanies.map((company) => (
//                         <li key={company.id}>{company.name}</li> // IDを使ってリストを生成
//                     ))
//                 ) : (
//                     <p>No results found</p>
//                 )}
//             </ul>
//             <Usage /> 
//             <ScrollObserver />  
//             <CustomizedInputBase onSearch={handleSearch} />
//             <CustomizedInputBase onSearch={handleSearch} />
//             <CustomizedInputBase onSearch={handleSearch} />
//             <CustomizedInputBase onSearch={handleSearch} />
//             <h1>Test</h1>
//             <h1>Test</h1>
//             <h1>Test</h1>
//             <h1>Test</h1>


//         </div>
//     );
// }

export default Test;
