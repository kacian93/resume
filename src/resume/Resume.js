import {useParams} from 'react-router-dom';
import 'antd/dist/antd.css';
import './css/Resume.css';
import {Divider} from "antd";

function ResumePage(){
    return (
        <div className={"content-history"}>
            <div className="content-name">
                <ruby className={"name"}>朴<rt>パク　</rt>宣律<rt>ソンユル</rt></ruby>
            </div>
            <Divider />
            <div className="content-work">
                <div className="content-header">Work Experience</div>
                <div className="info">
                    <div className="company">
                        <h3>GNG Service</h3>
                        <h5>2020.1～今</h5>
                    </div>
                    <p>
                        わたくしはジエンジ会社でSI部署に所属されて派遣として働いております。
                        現在現場で新入社員で入社して今まで約２年半勤務しております。
                        この現場で色々習っております。
                        自分のみ考えずにチームに役に立つようになるためには何が必要か、
                        自分の長所(誠実性、人の意図を把握するのは早い)と短所(話すのが苦手)を理解して
                        長所を生かせて短所を克服するためには何の努力が必要か分析して働いた結果、
                        いい評価をもらいながら、チームの戦力になるため頑張っております。
                        「そんなにいい評価を受けているのになんで転職希望？」と疑問ができるかもしれませんが、
                        実際今やっている仕事はQAとして仕事をしておりますが、
                        自分がやりたいことはWebエンジニアでおります。
                        ありがたく今の現場で新入社員で入社して何も知らなかったので習い続けて約２年半経っております。
                        だが、自分がやりたいことと違う道を歩いているのを実感しております。
                        Webエンジニアとして歩きたいの欲が満たされないので結局転職を希望しております。
                    </p>
                </div>
            </div>
            <Divider />
            <div className="content-education">
                <div className="content-header">Education</div>
                    <div className="school-history">
                        <div className="school">
                            <h3 className="content-school">東ソウル大学</h3>
                            <h5 className={"content-school-histiry"}>2013.3～2015.2</h5>
                        </div>
                        <div className="school">
                            <h3 className="content-school">ソウルサイバー大学</h3>
                            <h5 className={"content-school-histiry"}>2018.3～2019.8</h5>
                        </div>
                    </div>
                    <div className="info">
                        わたくしは韓国で産業デザインを専門学校で学んだ後、コンピューター専攻に編入しました。
                        産業デザインを選択して理由は自分が何が得意か、自分が何がやりたいかも分からず、
                        先生と父親の推薦で「君はセンスがあります。それとも君の絵には特別な何かがあります」と聞いて進路を選択しましたが、
                        3Dモデリングは自分と合わなくてさまよいしました。
                        その中で偶然にもHTML、CSS、JavaScriptを学ぶ機会をもらうようになりました。
                        自分が作ったコードで何かが出来上がるのは「これだ！」感じるほど自分と合いました。
                        それでもっと、もっと勉強しようとしてコンピューター塾に入りました。
                        そちらでは結局父親が癌になって看護をするようになってやめましたが、
                        自分は何かできないかなと思ってサイバー大核に入ってコンピューター専攻に編入して勉強を続きました。
                        編入した大学でパソコンでもいろんな分野があることと自分がやりたいことはWebエンジニアだと知りました。
                    </div>
            </div>
        </div>
    );
}

export default ResumePage;
