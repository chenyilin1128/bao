
$(function(){
    // �ֲ�ͼ��ʼ
    var left = $('.content_middle .btnLeft');//��ȡ����
    var right = $('.content_middle .btnRight');//��ȡ�ҵ��
    var aSmall = $('.content_middle .table a');
    var aLi = $('.content_middle ul li');
    var iNow = 0;
    // ����
    left.click(function(){
        iNow--;
        // �жϻ���
        if(iNow<0){
            iNow=5;
        }
        aLi.eq(iNow).siblings().stop().animate({
            opacity:0

        },2000);
        aLi.eq(iNow).stop().animate({
            opacity:1

        },2000);
        aSmall.eq(iNow).addClass('small_active').siblings().removeClass('small_active');
    });
    // �ҵ���л�
    right.click(function(){
        iNow++;
        if(iNow>5){
            iNow=0;
        }
        aLi.eq(iNow).siblings().stop().animate({
            opacity:0

        },2000);
        aLi.eq(iNow).stop().animate({
            opacity:1

        },2000);
        aSmall.eq(iNow).addClass('small_active').siblings().removeClass('small_active');

    });

    //�ֶ��л�
    aSmall.mouseover(function(){
        var n = $(this).index();
//        var iNow = $(this).index();
//        alert(iNow);
        iNow = n;
        aLi.eq(iNow).siblings().stop().animate({
            opacity:0

        },2000);
        aLi.eq(iNow).stop().animate({
            opacity:1

        },2000);
        aSmall.eq(iNow).addClass('small_active').siblings().removeClass('small_active');

    });
    // ��װ������
    function move1(){
        aLi.eq(iNow).siblings().stop().animate({
            opacity:0

        },2000);
        aLi.eq(iNow).stop().animate({
            opacity:1
        },2000);

        aSmall.eq(iNow).addClass('small_active').siblings().removeClass('small_active');
    }

    // ������ʱ���ĳ�ʼֵ
    function run2(){
        iNow++;
        if(iNow>5){
            iNow=0;
        }
        move1();
    }
// ��ʱ��
    timer = setInterval(run2,2000);



//����껮�룬ֹͣ�ֲ�ͼ�л�
    $(".content_middle").hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(run2,2000);
    })
})
$(function(){
    $(".title li").each(function(index){
        $(this).click(function(){
            $(".title .titsh").removeClass("titsh");
            $(".content .consh").removeClass("consh");
            $(this).addClass("titsh");
            $(".content>div:eq("+index+")").addClass("consh");
            $(".title li:eq("+index+")").addClass("titsh");
        })
    })
})
