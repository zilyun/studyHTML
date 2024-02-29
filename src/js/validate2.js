$(document).ready(function () {

    // 회원가입 버튼 클릭할 때 이벤트 처리 부분
    $("#myform").submit(function () {

        // $.trim(문자열)는 문자열의 앞, 뒤 공백을 제거합니다.
        const id = $("#id");
        if ($.trim(id.val()) == "") {
            alert("ID를 입력하세요.");
            id.focus();
            return false;
        }

        const pass = $("#pass");
        if ($.trim(pass.val()) == "") {
            alert("비밀번호를 입력하세요.");
            pass.focus();
            return false;
        }

        const jumin1 = $("#jumin1");
        if ($.trim(jumin1.val()) == "") {
            alert("주민번호 앞자리를 입력하세요.");
            jumin1.focus();
            return false;
        }

        if ($.trim(jumin1.val()).length != 6) {
            alert("주민번호 앞자리 6자리를 입력하세요");
            jumin1.val("").focus();
            return false;
        }

        const jumin2 = $("#jumin2");
        if ($.trim(jumin2.val()) == "") {
            alert("주민번호 뒷자리를 입력하세요.");
            jumin2.focus();
            return false;
        }

        console.log($.trim(jumin2.val()).length);
        if ($.trim(jumin2.val()).length != 7) {
            alert("주민번호 뒷자리 7자리를 입력하세요");
            jumin2.val("").focus();
            return false;
        }

        const email = $("#email");
        if ($.trim(email.val()) == "") {
            alert("E-Mail 아이디를 입력 하세요");
            email.focus();
            return false;
        }

        const domain = $("#domain");
        if ($.trim(domain.val()) == "") {
            alert("E-Mail 도메인을 입력하세요");
            domain.focus();
            return false;
        }

        let cnt = $('input:radio:checked').length;
        if (cnt == 0) {
            alert("성별을 선택하세요");
            return false;
        }

        cnt = $('input:checkbox:checked').length;
        if (cnt < 2) {
            alert("취미는 2개 이상 선택하세요");
            return false;
        }

        const post1 = $("#post1");
        if ($.trim(post1.val()) == "") {
            alert("우편번호를 입력 하세요");
            post1.focus();
            return false;
        }

        if (!$.isNumeric(post1.val())) {
            alert("우편번호는 숫자만 입력 가능 합니다.");
            post1.val("").focus();
            return false;
        }

        const address = $("#address");
        if ($.trim(address.val()) == "") {
            alert("주소를 입력하세요");
            address.val("").focus();
            return false;
        }

        const intro = $("#intro");
        if ($.trim(intro.val()) == "") {
            alert("자기소개를 입력 하세요");
            intro.focus();
            return false;
        }

    }); // submit() end

    // ID 중복검사 부분
    $('#myform > fieldset > div > div:nth-child(1) > input[type=button]:nth-child(3)').on('click', function () {
        const id = $('#id');
        const id_value = $.trim(id.val());
        if (id_value == "") {
            alert("ID를 입력하세요.");
            id.focus();
            return false;
        } else {
            let pattern = /^[A-Z][a-zA-Z_0-9]{3,}$/;
            if (pattern.test(id_value)) {
                const ref = `idcheck.html?id=${id_value}`;
                window.open(ref, "idcheck", "width=350, height=200");
            } else {
                alert("첫글자는 대문자이고 두번째부터는 대소문자, 숫자, _로 총 4개 이상이어야 합니다.");
                id.val('').focus();
            }
        }
    }); // $("#idcheck").click()

    // 우편검색 버튼 클릭
    $("#postcode").click(function () {
        window.open("post.html", "post", "width=400, height=500, scrollbars=yes");
    }); // $("#postcode").click()

    // 도메인 선택 부분
    $("#sel").change(function () {
        const domain = $("#domain");
        if ($(this).val() == "") {
            domain.val("").focus();
            domain.prop("readOnly", false);
        } else {
            domain.val($(this).val());
            domain.prop("readOnly", true);
        }
    }); // $("#sel").change()

    $('#jumin1').keyup(function () {
        const jumin1 = $(this);
        const jumin2 = $('#jumin2');

        if ($.trim(jumin1.val()).length === 6) {
            let pattern = /^[0-9]{2}(0[1-9]|1[012])(0[1-9]|1[0-9]|2[0-9]|3[01])$/;
            if (pattern.test(jumin1.val())) {
                jumin2.focus();
            } else {
                alert("숫자 또는 형식에 맞게 입력하세요(yymmdd)");
                jumin1.val(''); // 앞자리 모두 초기화
                jumin1.focus();    // 앞자리에 포커스 준다.
            }
        }
    }); // $("#jumin1").keyup()

    $('#jumin2').keyup(function () {
        const jumin2 = $(this);
        if ($.trim(jumin2.val()).length === 7) {
            let pattern = /^[1234][0-9]{6}$/;
            if (pattern.test(jumin2.val())) {
                let c = Number($.trim(jumin2.val()).substr(0, 1));
                let index = (c - 1) % 2; // c = 1 또는 3이면 index1 = 0 => 1 => "gender1"
                // c = 2 또는 4이면 index2 = 1 => 2 => "gender2"
                let gender = $('input[name="gender"]');
                gender.eq(index).prop("checked", true);
            } else {
                alert("형식에 맞게 입력하세요.");
                jumin2.val('');
                jumin2.focus();
            }
        }
    }); // $("#jumin2").keyup()

});