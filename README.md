# 팀 포트폴리오 첫번째 ) 리뉴얼 : EasyNetWorks

팀 작업으로 포트폴리오를 진행하게 되서 먼저 리뉴얼할 작업물을 선정하였습니다. 그리고 각자 페이지를 담당하여 작업을 하였습니다. 일부 컨텐츠를 위해 JSON데이터를 사용하여 작업을 진행하였습니다.
그리고 팀작업이고 리뉴얼인 페이지인만큼 이전 개인 포폴보다 규모가 커지게 되었습니다. 

뿐만 아니라 카카오 로그인과 지도 api를 사용하여 리뉴얼을 진행하였습니다. 또한 이사이트를 선정한 이유는 단조롭고 답답한 구조의
컨텐츠 배치로 사용자의 편의성이 높지 않아보여 개선 시도를 하고자 하였습니다.

이사이트를 제작함으로써 
1. Github를 사용하는데 능숙하지 않아서 여러 불편함이 있었지만 형상관리의 중요성을 깨달았습니다.
2. API 및 데이터를 다루는 코딩은 처음이라 힘들었지만 팀원들과 상의하며 해결 해 내는것에 뿌듯함을 느꼈습니다.
3. 또한 의사소통을 통해 서로 피드백을 주고받으며 문제해결능력을 키운데 있어 뿌듯함을 느꼈습니다.

<a href="https://www.sejongpac.or.kr/portal/main/main.do">기존 홈페이지 바로가기 </a>
## 최근 업데이트 목록 (ver 1.0.1 / 2024.03.13)
- README.md 업데이트 
- 세종시즌 페이지 더보기 기능 추가

## 제작기간) 
 6월~7월 (공부 4시간 + 제작 4시간)

## 제작에 참여한 멤버)

- 👩 성주연 ( 디자인 팀장 / 조장 / 담당 페이지 : 전체일정 , 예약내역 확인 , 대관공고)
- 👧 조현지 ( 기획 팀장 / 담당 페이지 : 로그인 , 오시는 길, 푸터 )
- 👩‍🦱 권오성 ( 기획 팀장 /  담당 페이지 : 이벤트 , 세종시즌 , 예매확인/취소 )
- 👦 이정민 ( 개발 팀장 1 / 담당 페이지 : 헤더 ,공연-전시-강좌 )
- 🧔 이현 ( 개발 팀장 2 / 담당 페이지 : 메인 , 마이페이지 )

## 개발 환경) 
- `visual studio code`
- `HTML`
- `CSS`
- `JavaScript`
- `kakao api map`
- `Github`
- `Figma`

## 페이지 구성)
* 메인페이지
* 공연전시강좌
* 대관안내
* 세종시즌
* 전체일정
* 이벤트
* 고객센터(오시는 길)
* 예매내역확인
* 로그인페이지

## 주요기능 
#### 대관공고
* 제이슨 데이터를 이용해 대관공고 내용 출력
* 페이지당 10개의 게시물만 출력되도록 제한
#### 전체일정
* datepicker를 이용해 달력 출력
* 날짜에 맞게 공연명이 노출
#### 오시는 길
* 스크롤 중 자연스럽게 TOP버튼 노출
* 컨텐츠를 순차적으로 노출하기 위한 observer사용
* 2개의 지도를 기로에 맞게 확인 할수 있도록 지도 전환 버튼 생성(Google map/ Kakao map)
* 지도 내부 카테고리 마커 변경
#### 이벤트
* 인증키를 사용해 받은 데이터셋을 페이지에 적용
* 실시간을 적용해서 자동으로 유지보수가 가능
#### 예매내역
* history.pushState(); 를 사용하여 주소 변경
* 팝업창 함수를 만들어서 클릭 시 팝업 실행
#### 마이페이지
* 카카오 로그인 api를 사용하여 카카오 로그인 연동
* 규격화된 데이터가 없어 새로고침 시 랜덤 숫자 부여 ,그에 맞는 등급 바 , 등급 ,  보유포인트 변경 노출

## 프로젝트 준비과정
1. 팀원들간의 아이디어를 구성하여 리메이크 페이지 선정
2. 선정 후 관련페이지의 정보 수집 및 아이콘 제작, 이미지 준비 API활용 가능 여부 확인
3. 각 페이지 별 기능들에 대해 파악
4. 디자인팀장의 main page 선작업 및 준비된 UI kit를 활용 해 sub페이지 리메이크 작업 시안 제작 (figma)
5. 페이지 별 화면 구현 (html/scss)
6. 파악한 기능들을 이용하여 javascript 기능 구현
7. 데이터를 사용하여 API 작업 및 로그인 기능 구현
8. json data 활용하여 sub page제작 (대관공고, 이벤트, 전체일정)
9. 테스트 결과 보고서/완료 보고서 작성

  
## 페이지 구성목록


## 예시코드
```
   let title1 = ['SyncNext_23Mobile_Ticket','Groove_Open','Listen_on_Spotify','SummerArcademi','SyncNext_23Mobile_Ticket','Groove_Open','Listen_on_Spotify','SummerArcademi','SyncNext_23Mobile_Ticket','Groove_Open','Listen_on_Spotify','SummerArcademi','SyncNext_23Mobile_Ticket','Groove_Open','Listen_on_Spotify','SummerArcademi','SyncNext_23Mobile_Ticket','Groove_Open','Listen_on_Spotify','SummerArcademi','SyncNext_23Mobile_Ticket','Groove_Open','Listen_on_Spotify','SummerArcademi','SyncNext_23Mobile_Ticket','Groove_Open','Listen_on_Spotify','SummerArcademi','SyncNext_23Mobile_Ticket','Groove_Open'];

let title2 = ['2022_SecondhalfEvent', '2022_SpringEvent', '2022_SummerEvent', '2023_Firsthalf_yearEvent','2023_SeaonEvent','2023_SeasonTicket_Event','College_entrance_exam_discount_Event','Dear_Schubert_Ticket_Open_Event','GHOST_STORY','Home_page_member_Event','LOVE_IN_SEOUL 2022','Membership_Event','Musical_again,spring_Event','Points_earned_Event','Rebuilding_Event','Schubert_and_the_Rose_Fairy_Sherbet_Event','Sejong_Chamber_Series_Tickets_Open_Event','2022_SecondhalfEvent', '2022_SpringEvent', '2022_SummerEvent', '2023_Firsthalf_yearEvent','2023_SeaonEvent','2023_SeasonTicket_Event','College_entrance_exam_discount_Event','Dear_Schubert_Ticket_Open_Event','GHOST_STORY','Home_page_member_Event','LOVE_IN_SEOUL 2022','Membership_Event','Musical_again,spring_Event'];


const elEventing = document.querySelectorAll('.eventing li');
const elBlackColor = document.querySelectorAll('li a')
const elColumn1 = document.querySelector('.column1');
const elPageTurn = document.querySelector('.page_turn');
const elPageNumbers = elPageTurn.querySelectorAll('span');
const elBefore= document.querySelectorAll('.eventing li');
let currentPage = 1; // 현재 페이지를 추적


//데이터 가져오기
fetch('../data/data.json')
    .then(response => {
        if (!response.ok) {
            //데이터를 받아올때 성공적으로 받아왓는지 확인해줌 
            //실패하면 에러 메시지를 보여줌
            throw new Error(`에러: ${response.status}`);
        // 응답이 성공적일 경우 JSON 형식으로 변환하여 반환
    }return response.json();})
    .then(jsonData => {
        let dataAll = jsonData.SJWPerform.row;
        console.log(dataAll);
        let toDate = new Date();l
        let data ={e1:[],e2:[],e3:[]};
        dataAll.forEach((obj,key)=>{
            
            let sDate = {
                s1:obj.START_DATE.substring(0,4),
                s2:obj.START_DATE.substring(4,6),
                s3:obj.START_DATE.substring(6),
                day:function(){
                    return new Date(`${this.s1}-${this.s2}-${this.s3}, 00:00:00`);
                }
            }
            let eDate = {
                s1:obj.END_DATE.substring(0,4),
                s2:obj.END_DATE.substring(4,6),
                s3:obj.END_DATE.substring(6),
                day:function(){
                    return new Date(`${this.s1}-${this.s2}-${this.s3}, 23:59:00 `);
                }
            }
            obj.startD = `${sDate.s1}-${sDate.s2}-${sDate.s3}`;
            obj.endD = `${eDate.s1}-${eDate.s2}-${eDate.s3}`;
            
            if(toDate >= sDate.day() && toDate <= eDate.day()) { data.e1.push(obj); }//진행중..
            
            if(toDate < sDate.day()){ data.e2.push(obj); } //진행예정
            
            if(toDate > eDate.day()){ data.e3.push(obj); } //종료..

        })
        
     
        /* ENDLISTHTML(  data.e3  ); */
        
        STARTLISTHTML(  data.e1  );
        elPageTurn.classList.add('active');
        

        elEventing.forEach(function (ele, key) {
            ele.addEventListener('click', function (e) {
                e.preventDefault();
                if (key===0){ //진행중 클릭
                    updatePageContent();
                    STARTLISTHTML(data.e1);
                    elBlackColor[0].classList.add('black');
                    elBlackColor[1].classList.remove('black');
                    elBefore[1].classList.add('active'); // 페이지 넘버 변경
                    elBefore[0].classList.remove('active');
                    elPageTurn.classList.add('active');
                }
                else{   //종료된 클릭
                    updatePageContent();
                    ENDLISTHTML(data.e3)
                    elBlackColor[1].classList.add('black');
                    elBlackColor[0].classList.remove('black');
                    elBefore[0].classList.add('active'); 
                    elBefore[1].classList.remove('active');
                    elPageTurn.classList.remove('active');// 페이지 넘버 변경
                }
            });
        });
    }); 

/* 진행중 이벤트 선택시 나오는 리스트를 뽑는 함수 */
function STARTLISTHTML(obj) {
    obj.forEach((item,key)=>{
        const listItem = document.createElement('li');    
        const imageElement = document.createElement('img');
        imageElement.src = item.FILE_URL_MI; // 이미지 URL 설정
        imageElement.alt = item.TITLE; // 이미지 대체 텍스트 설정
        listItem.innerHTML += `
            <div class="bgimg">
                <img src="../imgs/event/${title1[key]}.png" alt="">
            </div>
            <div class="txtbox">
                <b>${item.TITLE}</b>
                <p>${item.startD} ~ ${item.endD}</p>
            </div>
        `;
        listItem.addEventListener('click', function (e) {
            // 아이템에 걸려있는 링크로 이동
            window.location.href = item.PERFORM_URL;
        })
        elColumn1.appendChild(listItem); //지정된 부모 요소에 새로운 자식 요소를 추가하는 데 사용
    })
    
    
}

/* 종료된 이벤트 선택시 나오는 리스트를 뽑는 함수 */
function ENDLISTHTML(obj) {
    obj.forEach((item,key)=>{
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div class="bgimg">
                <div class="end">

                    <img src="../imgs/event/end_event/${title2[key]}.png" alt="">
                    <div class="blur">

                    </div>
                </div>
                <div class="end_contants">
                    <p>
                        종료된 이벤트
                    </p>
                </div>
            </div>
            <div class="txtbox">
                <b>${item.TITLE}</b>
                <p>${item.startD} ~ ${item.endD}</p>
            </div>
        `;
        listItem.addEventListener('click', function (e) {
            // 아이템에 걸려있는 링크로 이동
            window.location.href = item.PERFORM_URL;
        })
        elColumn1.appendChild(listItem);
    })
}

//페이지를 다음으로 전환하는 함수
function nextPage() {
    if (currentPage === 1) {
        currentPage++;
        ENDLISTHTML(data.e2); // 종료된 이벤트 목록을 업데이트
        updatePageNumbers();
    }
}

//페이지를 이전으로 전환하는 함수
function prevPage() {
    if (currentPage === 2) {
        currentPage--;
        STARTLISTHTML(data.e1); // 진행중 이벤트 목록을 업데이트
        updatePageNumbers();
    }
}

//페이지 전환
function updatePageContent() {
    elColumn1.innerHTML = ''; // Clear the existing content
    const totalEvents = title1.length; // 진행 중 이벤트의 총 개수

    if (currentPage === 1) {
        elBefore[1].classList.add('active'); // 페이지 넘버 변경
        elBefore[0].classList.remove('active');
        elPageTurn.classList.add('active');
    } else {
        elBefore[0].classList.add('active'); 
        elBefore[1].classList.remove('active');
        elPageTurn.classList.remove('active');// 페이지 넘버 변경
    }
    
    updatePageNumbers(totalEvents);
}

function updatePageNumbers(totalEvents) {
    const totalPages = Math.ceil(totalEvents / 4); // 페이지 수 계산

    // 페이지 번호 업데이트
    for (let i = 0; i < 4; i++) {
        elPageNumbers[i + 2].textContent = i + 1;
    }
}

// 페이지가 로드될 때 초기화
window.onload = function () {
    elEventing.forEach(function (ele, key) {
        
    });
}

```

#구분선
--------------------

#이미지 출력(레퍼지토리 경로)
![02](http://)<img src ="/img/sasdf.jpg">

#목록
* asdfasdfsadf

