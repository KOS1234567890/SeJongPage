let title1 = ['SyncNext_23Mobile_Ticket','Groove_Open','Listen_on_Spotify','SummerArcademi','SyncNext_23Mobile_Ticket','Groove_Open','Listen_on_Spotify','SummerArcademi','SyncNext_23Mobile_Ticket','Groove_Open','Listen_on_Spotify','SummerArcademi','SyncNext_23Mobile_Ticket','Groove_Open','Listen_on_Spotify','SummerArcademi','SyncNext_23Mobile_Ticket','Groove_Open','Listen_on_Spotify','SummerArcademi','SyncNext_23Mobile_Ticket','Groove_Open','Listen_on_Spotify','SummerArcademi','SyncNext_23Mobile_Ticket','Groove_Open','Listen_on_Spotify','SummerArcademi','SyncNext_23Mobile_Ticket','Groove_Open'];

let title2 = ['2022_SecondhalfEvent', '2022_SpringEvent', '2022_SummerEvent', '2023_Firsthalf_yearEvent','2023_SeaonEvent','2023_SeasonTicket_Event','College_entrance_exam_discount_Event','Dear_Schubert_Ticket_Open_Event','GHOST_STORY','Home_page_member_Event','LOVE_IN_SEOUL 2022','Membership_Event','Musical_again,spring_Event','Points_earned_Event','Rebuilding_Event','Schubert_and_the_Rose_Fairy_Sherbet_Event','Sejong_Chamber_Series_Tickets_Open_Event','2022_SecondhalfEvent', '2022_SpringEvent', '2022_SummerEvent', '2023_Firsthalf_yearEvent','2023_SeaonEvent','2023_SeasonTicket_Event','College_entrance_exam_discount_Event','Dear_Schubert_Ticket_Open_Event','GHOST_STORY','Home_page_member_Event','LOVE_IN_SEOUL 2022','Membership_Event','Musical_again,spring_Event'];


const elEventing = document.querySelectorAll('.eventing li');
const elBlackColor = document.querySelectorAll('li a')
const elColumn1 = document.querySelector('.column1');
const elPageTurn = document.querySelector('.page_turn');
const elPageNumbers = elPageTurn.querySelectorAll('span');
let currentPage = 1; // 현재 페이지를 추적

// 데이터 가져오기
fetch('../data/data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`에러: ${response.status}`);
        }
        return response.json();
    })
    .then(jsonData => {
        let dataAll = jsonData.SJWPerform.row;
        let toDate = new Date();
        let data = { e1: [], e2: [], e3: [] };
        dataAll.forEach((obj, key) => {

            let sDate = {
                s1: obj.START_DATE.substring(0, 4),
                s2: obj.START_DATE.substring(4, 6),
                s3: obj.START_DATE.substring(6),
                day: function () {
                    return new Date(`${this.s1}-${this.s2}-${this.s3}, 00:00:00`);
                }
            }
            let eDate = {
                s1: obj.END_DATE.substring(0, 4),
                s2: obj.END_DATE.substring(4, 6),
                s3: obj.END_DATE.substring(6),
                day: function () {
                    return new Date(`${this.s1}-${this.s2}-${this.s3}, 23:59:00`);
                }
            }
            obj.startD = `${sDate.s1}-${sDate.s2}-${sDate.s3}`;
            obj.endD = `${eDate.s1}-${eDate.s2}-${eDate.s3}`;

            if (toDate >= sDate.day() && toDate <= eDate.day()) { data.e1.push(obj); } // 진행중..

            if (toDate < sDate.day()) { data.e2.push(obj); } // 진행예정

            if (toDate > eDate.day()) { data.e3.push(obj); } // 종료..

        });

        STARTLISTHTML(data.e1);
        elPageTurn.classList.add('active');

        elEventing.forEach(function (ele, key) {
            ele.addEventListener('click', function (e) {
                e.preventDefault();
                if (key === 0) { // 진행중 클릭
                    elColumn1.innerHTML = '';
                    STARTLISTHTML(data.e1);
                    elBlackColor[0].classList.add('black');
                    elBlackColor[1].classList.remove('black');
                    elEventing[1].classList.add('active');
                    elEventing[0].classList.remove('active');
                    elPageTurn.classList.add('active');
                } else {   // 종료된 클릭
                    elColumn1.innerHTML = '';
                    ENDLISTHTML(data.e3);
                    elBlackColor[1].classList.add('black');
                    elBlackColor[0].classList.remove('black');
                    elEventing[0].classList.add('active');
                    elEventing[1].classList.remove('active');
                    elPageTurn.classList.remove('active');
                }
            });
        });
    });

// 진행중 이벤트 선택시 나오는 리스트를 뽑는 함수
function STARTLISTHTML(obj) {
    obj.forEach((item, key) => {
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
        });
        elColumn1.appendChild(listItem); // 지정된 부모 요소에 새로운 자식 요소를 추가하는 데 사용
    });
}

// 종료된 이벤트 선택시 나오는 리스트를 뽑는 함수
function ENDLISTHTML(obj) {
    obj.forEach((item, key) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div class="bgimg">
                <div class="end">
                    <img src="../imgs/event/end_event/${title2[key]}.png" alt="">
                    <div class="blur"></div>
                </div>
                <div class="end_contants">
                    <p>종료된 이벤트</p>
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
        });
        elColumn1.appendChild(listItem);
    });
}
   