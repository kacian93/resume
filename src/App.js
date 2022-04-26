
import {HomeOutlined, MailOutlined, PhoneOutlined} from '@ant-design/icons';
import {Divider} from 'antd';
import { Route,Link,Routes, useNavigate} from 'react-router-dom';
import ResumePage from './resume/Resume.js';
import './App.css';

function App() {
    const history = useNavigate();
  return (
      <div className={"body"}>
        <div className={"header"}></div>
        <div className="content">
          <Link to={"/resume"} className="content-left">
              <div className="content-picture">
              <img src="/resume/me.png" alt="my photo"/>
            </div>
              <Divider />
            <div className="content-caption">
              <div className="content-caption-header">
                  私という人は。。
              </div>
              <div className="content-caption-info">
                  Webに関する熱情を持って<br />
                  自分を実力を伸ばしたい
                  日本に住んでいる韓国人になります。　<br />
                  今、日本のキャリア会社で働いておりますが、
                  コミュニケーションの重要性や
                  周りの人との関係の大事さや
                  色々習いましたが、
                  実際したいWebの熱情が収まらないので
                  転職を希望しております。
              </div>
            </div>
              <Divider />
            <div className="content-info">
                <ul>
                    <li><PhoneOutlined /> 080-4611-0412</li>
                    <li><MailOutlined /> kacian93@gmail.com</li>
                    <li><HomeOutlined /> 143-0011　東京都大田区大森本町</li>
                    <li></li>
                </ul>
            </div>
          </Link>
            <div className="content-right">
              <Routes>
                <Route exact path="/" element={<ResumePage />} />
                </Routes>
            </div>
        </div>
        <div className="footer"></div>
      </div>
  );
}

export default App;
