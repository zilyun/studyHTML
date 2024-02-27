/*
* 이벤트에 적용된 함수를 완성하세요
1. check() : 모든 항목의 공백을 체크하여 공백이 있는 경우 입력하라는 메시지 출력하고 
                submit이 이루어지지 않도록 합니다.
                취미는 반드시 2개이상 체크하였는지 확인합니다.

2. idcheck() : 
                1)  id값이 있는지 체크하고 입력하지 않으면 "ID를 입력하세요"라는 메시지 출력
                2)  id값을 입력하면 width=300, height=250"의 팝업창이 나타나도록 합니다.
                3)  보여주는 페이지는 "idcheck.html"이며 주소창에 id를 입력한 값이 표시되도록 합니다.                 
                    예) file:///D:/workspace/JavaScript/src/ch02/idcheck.html?id=홍길동

3. move() : 주민번호 앞자리는 6자리 숫자이면 뒷자리로 포커스를 옮기고
            주민번호 앞자리가 6자리 중 숫자가 아닌 경우 "숫자를 입력하세요"라는 메시지 출력과 앞자리에 포커스 위치하게 합니다.            
            주민번호 뒷자리가 7자리 중 숫자가 아닌 경우 "숫자를 입력하세요"라는 메시지 출력과 뒷자리에 포커스 위치하게 합니다.

4. domain1() : select태그를 선택하면 id=domain input태그에 선택된 값이 나타나게 합니다.

5. post() : "이곳은 우편번호 검색하는 곳입니다."라는 팝업창(width=400, height=500)이 나타납니다.
                보여주는 페이지는 "post.html"입니다.

1. 아이디 중복 검사시
아이디는 첫글자는 대문자이고 두번째부터는 대소문자, 숫자, _로 총 4개 이상이어야 합니다.
만약 조건에 만족하지 않으면       
alert("첫글자는 대문자이고 두번째부터는 대소문자, 숫자, _로 총 4개 이상이어야 합니다."); 

2. 주민등록번호 앞자리,뒷자리 정규식으로 유효성 검사하고
    검사에 만족하면 뒷자리 첫번째 숫자에 따라 성별이 자동 체크됩니다.   
    뒷자리 1 또는 3이면 남자
    뒷자리 2 또는 4이면 여자
    <input type="radio" name="gender" value="m" id="gender1" onclick="return false">남자
    <input type="radio" name="gender" value="f" id="gender2" onclick="return false">여자
=> onclick="return false"를 추가해서 외부에서 체크할 수 없도록 합니다.

3. 성별 체크 
    라디오 버튼 선택한 객체를 가져옵니다.
document.querySelectorAll("input[type=radio]:checked");

4. 3번을 참고해서 취미도 querySelectorAll()를 이용해서 갯수를 구해보세요.

*/

function check() {
    // 1. check() : 모든 항목의 공백을 체크하여 공백이 있는 경우 입력하라는 메시지 출력하고 
    //             submit이 이루어지지 않도록 합니다.
    //             취미는 반드시 2개이상 체크하였는지 확인합니다.
    var inputs = document.querySelectorAll('input');

    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            alert('입력 항목 중 공백이 있는 항목이 존재합니다. 모두 채워주세요.');
            return false;
        }
    }

    // 선택된 목록 가져오기
    var query = 'input[name="hobby"]:checked';
    var selectedElements =
        document.querySelectorAll(query);

    // 선택된 목록의 갯수 세기
    var selectedElementsCnt =
        selectedElements.length;

    if (selectedElementsCnt < 2) {
        alert('취미는 반드시 2개 이상 체크하세요.');
        return false;
    }
}

function idcheck() {
    // 2. idcheck() : 
    //             1)  id값이 있는지 체크하고 입력하지 않으면 "ID를 입력하세요"라는 메시지 출력
    //             2)  id값을 입력하면 width=300, height=250"의 팝업창이 나타나도록 합니다.
    //             3)  보여주는 페이지는 "idcheck.html"이며 주소창에 id를 입력한 값이 표시되도록 합니다.                 
    //                 예) file:///D:/workspace/JavaScript/src/ch02/idcheck.html?id=홍길동

    // 1. 아이디 중복 검사시
    // 아이디는 첫글자는 대문자이고 두번째부터는 대소문자, 숫자, _로 총 4개 이상이어야 합니다.
    // 만약 조건에 만족하지 않으면       
    // alert("첫글자는 대문자이고 두번째부터는 대소문자, 숫자, _로 총 4개 이상이어야 합니다."); 


    var id = document.querySelector('input[name="id"]');
    if (id.value.trim() == '') {
        alert('ID를입력하세요.');
        return false;
    } else {
        // 첫글자는 대문자이고 두번째부터는 대소문자, 숫자, _로 총 4개 이상
        // ^ : 시작
        // $ : 끝
        var pattern = /^[A-Z][a-zA-Z_0-9]{3,}$/;
        if (pattern.test(id.value.trim())) {
            // 사용자가 입력한 방식을 get 방식으로 넘깁니다.
            // var ref = 'idcheck.html?id=' + id.value;
            var ref = `idcheck.html?id=${id.value}`;

            // 팝업창을 이용해 자료를 넘김
            window.open(ref, '_blank', 'width=300, height=250');
        } else {
            alert("첫글자는 대문자이고 두번째부터는 대소문자, 숫자, _로 총 4개 이상이어야 합니다.");
            id.vlaue = '';
            id.focus();
        }
    }
}

function move() {
    // 3. move() : 주민번호 앞자리는 6자리 숫자이면 뒷자리로 포커스를 옮기고
    //         주민번호 앞자리가 6자리 중 숫자가 아닌 경우 "숫자를 입력하세요"라는 메시지 출력과 앞자리에 포커스 위치하게 합니다.            
    //         주민번호 뒷자리가 7자리 중 숫자가 아닌 경우 "숫자를 입력하세요"라는 메시지 출력과 뒷자리에 포커스 위치하게 합니다.

    // 2. 주민등록번호 앞자리,뒷자리 정규식으로 유효성 검사하고
    // 검사에 만족하면 뒷자리 첫번째 숫자에 따라 성별이 자동 체크됩니다.   
    // 뒷자리 1 또는 3이면 남자
    // 뒷자리 2 또는 4이면 여자
    // <input type="radio" name="gender" value="m" id="gender1" onclick="return false">남자
    // <input type="radio" name="gender" value="f" id="gender2" onclick="return false">여자
    // => onclick="return false"를 추가해서 외부에서 체크할 수 없도록 합니다.

    var jumin1 = document.getElementById('jumin1');
    var jumin2 = document.getElementById('jumin2');

    if (jumin1.value.trim().length === 6) {
        var pattern = /^[0-9]{2}(0[1-9]|1[012])(0[1-9]|1[0-9]|2[0-9]|3[01])$/;
        // if (isNaN(jumin1.value)) {
        if (pattern.test(jumin1.value)) {
            jumin2.focus();
        } else {
            alert("숫자 또는 형식에 맞게 입력하세요.");
            jumin1.value = ""; // 앞자리 모두 초기화
            jumin1.focus();    // 앞자리에 포커스 준다.
        }
    }

    if (jumin2.value.trim().length === 7) {
        var pattern = /^[1234][0-9]{6}$/;
        if (pattern.test(jumin2.value)) {    
            var c = Number(jumin2.value.trim().substr(0, 1));
            var index = (c - 1) % 2; // c = 1 또는 3이면 index1 = 0 => 1 => "gender1"
                                     // c = 2 또는 4이면 index2 = 1 => 2 => "gender2"
            var gender = document.getElementById("gender" + (index + 1));
            
            gender.checked = true;
        } else {
            alert("형식에 맞게 입력하세요.");
            jumin2.value = '';
            jumin2.focus();
        }             
    }
}

function domain1() {
    // 4. domain1() : select태그를 선택하면 id=domain input태그에 선택된 값이 나타나게 합니다.

    var select = document.querySelector('select[name="sel"]');
    var domain = document.querySelector('input[name="domain"]');

    domain.value = select.value;
}

function post() {
    // 5. post() : "이곳은 우편번호 검색하는 곳입니다."라는 팝업창(width=400, height=500)이 나타납니다.
    //             보여주는 페이지는 "post.html"입니다.
    // 변수를 선언합니다.
    window.open('post.html', '_blank', 'width=400, height=500');
}