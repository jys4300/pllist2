const addButton = document.getElementById('addButton');
const modal = document.getElementById('messageModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const closeButton = document.getElementById('closeButton');
const submitButton = document.getElementById('submitButton');
const messageInput = document.getElementById('messageInput');
const messagesContainer = document.getElementById('messagesContainer');

// Add 버튼 클릭 시 모달 열기
addButton.addEventListener('click', () => {
    modal.style.display = 'block';
    modalBackdrop.style.display = 'block';
});

// 모달 닫기 버튼 클릭 시 모달 닫기
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    modalBackdrop.style.display = 'none';
});

// 완료 버튼 클릭 시 메시지 처리
submitButton.addEventListener('click', () => {
    const messageText = messageInput.value.trim();
    if (messageText) {
        // 메시지를 보여주는 영역에 추가
        const messageElement = document.createElement('div');
        messageElement.textContent = messageText;
        messageElement.classList.add('message');
        
        // 스타일 추가
        messageElement.style.marginBottom = '10px'; // 각 메시지 사이의 간격 설정
        messageElement.style.padding = '0'; // 패딩 제거
        messageElement.style.backgroundColor = 'transparent'; // 배경색 투명
        messageElement.style.border = 'none'; // 테두리 제거
        messageElement.style.boxShadow = 'none'; // 그림자 효과 제거
        messageElement.style.color = '#000'; // 글자 색상 조정 (필요에 따라 조정)
        messageElement.style.fontSize = '16px'; // 글자 크기 조정 (필요에 따라 조정)

        messagesContainer.appendChild(messageElement);
        
        // 메시지 컨테이너 보이기
        messagesContainer.style.display = 'block'; // 메시지가 추가되면 보이게 설정
        
        // 알림 표시
        alert(`응원 메시지: ${messageText}`); // 메시지를 처리하는 방법 (예: 알림)
        
        messageInput.value = ''; // 입력란 초기화
        modal.style.display = 'none'; // 모달 닫기
        modalBackdrop.style.display = 'none'; // 배경 닫기
    } else {
        alert("응원 메시지를 입력하세요!"); // 입력이 없을 경우 알림
    }
});

// 모달 배경 클릭 시 모달 닫기
modalBackdrop.addEventListener('click', () => {
    modal.style.display = 'none';
    modalBackdrop.style.display = 'none';
    messageInput.value = ''; // 입력란 초기화
});
