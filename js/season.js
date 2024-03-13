document.addEventListener("DOMContentLoaded", function () {
    const itemsPerPage = 1; // 한 번에 보여줄 리스트 개수
    const lists = document.querySelectorAll('.Season_content ul');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    let currentListIndex = 0;

    function showNextList() {
        if (currentListIndex < lists.length) {
            lists[currentListIndex].classList.remove('hidden');
            currentListIndex++;
        } else {
            // 더 이상 보여줄 리스트가 없으면 버튼 비활성화
            loadMoreBtn.disabled = true;
        }
    }

    loadMoreBtn.addEventListener('click', function () {
        showNextList();
    });

    // 페이지 로딩 시 초기에는 첫 번째 리스트만 보이도록 설정
    for (let i = 1; i < lists.length; i++) {
        lists[i].classList.add('hidden');
    }

    // 페이지 로딩 시 초기 리스트만 보이도록 설정
    showNextList();
});