import './App.css';
import Header from './components/layout/header';
import Voice from './components/layout/voice';
import TitleBar from './components/mui/titleBar';
import Footer from './components/layout/footer';
import './assets/styles/body.css';
import RecommendCard from './components/mui/recommendCard';
import FrontImageContainer from './components/layout/FrontImageContainer';
import EventCard from './components/mui/eventCard';
import Search from './components/mui/search';

function App() {
  const title1 = "東大生におすすすめの長期インターン求人";
  const title2 = "イベント・セミナー";
  const title3 = "記事・インターン体験談";

  return (
    <html>
      <header>
        <Header />
      </header>
      <body>
        <FrontImageContainer />

        <div class="container">
          <Voice />
          <Search />
          <div class="main-text" >
            <p>インターンは初めてでよくわからない...<br />本当にいい経験になるインターンを知りたい...<br />なら東大生の先輩に</p>
            <h2>直接相談!</h2>
          </div>

          <TitleBar subindex={title1} />
          <div class="recommend">
            <RecommendCard explain={"wwwwwwwwwwww"} />
            <RecommendCard explain={"wwwwwwwwwwww"} />
            <RecommendCard explain={"wwwwwwwwwwww"} />
            <RecommendCard explain={"wwwwwwwwwwww"} />
            <RecommendCard explain={"wwwwwwwwwwww"} />
          </div>


          <TitleBar subindex={title2} />
          <div class="recommend">
            {/* <EventCard explain={"wwwwwwwwwwwwwwwwwwwwwwww"} />
            <EventCard explain={"wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"} /> */}
            <EventCard explain={"wwwwwwwwwwww"} />
            <EventCard explain={"aaaaaaaaaa"} />
          </div>

          <TitleBar subindex={title3} />
          <div class="recommend">
            <EventCard explain={"wwwwwwwwwwww"} />
            <EventCard explain={"aaaaaaaaaa"} />
          </div>
          <h2>FAQ</h2>
        </div>
      </body>
      <footer>
        <Footer />
      </footer>
    </html >
  );
}

export default App;


// import React, { useState, useEffect } from "react";
// import { Center, Box, CheckboxGroup, Text } from "@chakra-ui/react";
// import axios from "axios";

// const App = () => {
//   const [companies, setCompanies] = useState([]);

//   const fetch = async () => {
//     const res = await axios.get("http://localhost:3010/companies");  //ここでRailsで記載したコントロラを記載
//     setCompanies(res.data);
//   };

//   useEffect(() => {
//     fetch();
//   }, []);


//   return (
//     <Box mt="64px">
//       <Center>
//         <Box>
//           <Box mb="24px">
//             <Text fontSize="24px" fontWeight="bold">
//               タスク一覧
//             </Text>
//           </Box>
//           <CheckboxGroup>
//             {companies.map((company) => {
//               return (
//                 <Box key={company.id} mb="8px">
//                   <Text>{company.name}</Text>
//                 </Box>
//               );
//             })}
//           </CheckboxGroup>
//         </Box>
//       </Center>
//     </Box>
//   );
// };

// export default App;
