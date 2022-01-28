$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "원피스",size:50},
        headers: { Authorization: "KakaoAK d2197b4e934e38bf96df42760d488fa9" }
    })
        .done(function (msg) {

            
            var best = document.getElementsByTagName('li');

            for (var i = 0; i < best.length; i++) {

                $(".book1 ul li a").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/><br>");
                $(".text_box").eq(i).append("<h5>" + msg.documents[i].title + "</h5>");
                $(".text_box").eq(i).append("<h3>" + msg.documents[i].price + "원</h3>");
            }

        });
        $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "기욤뮈소",size:50},
        headers: { Authorization: "KakaoAK d2197b4e934e38bf96df42760d488fa9" }
    })
        .done(function (msg) {

            
            var best2 = document.getElementsByTagName('li');

            for (var i = 0; i < best2.length; i++) {

                $(".book2_2_1 li a").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/><br>");
                $(".text_box2").eq(i).append("<h5>" + msg.documents[i].title + "</h5>");
                $(".text_box2").eq(i).append("<h3>" + msg.documents[i].price + "원</h3>");
            }

        });