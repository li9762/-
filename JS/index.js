/**
 * Created by Administrator on 2017/7/31.
 */
$(function(){
    /*顶部的鼠标移入颜色变化*/
    //1.发生的目标元素
    //2.什么事件 mouseover，mouseout
    //3.改变连接颜色
    $('.top a').mouseover(function(){
        $(this).css('color','#fff');
    }).mouseout(function(){
        $(this).css('color','#a4b094')
    })
    /*购物车效果*/
    $('.shopCar').mouseover(function(){
        $(this).css({color:'#FF6700',background:'#fff'});
        $('.goods').stop(true,false).slideDown();
    }).mouseout(function(){
        $(this).css({color:'#a4b094',background:'#424242'});
        $('.goods').stop(true,false).slideUp();
    })
    var flag = true;
    /*表单的输入框效果*/
    $('.ser1').mouseover(function(){
        if(flag){
            $('.ser1 input').css('border','1px solid #aaa');
            $('.ser2').css('border','1px solid #aaa').css('borderLeft','none');
        }
    }).mouseout(function(){
        if(flag){
            $('.ser1 input').css('border','1px solid #ccc');
            $('.ser2').css('border','1px solid #ccc').css('borderLeft','none');
        }
    })
    /*热门搜索的移入效果*/
    $('.hot a').mouseover(function(){
        $(this).css({'color':'#fff','background':'orange'})
    })
    $('.hot a').mouseout(function(){
        $(this).css({'color':'rgb(117,117,117)','background':'rgb(238,238,238)'})
    })
    /*按钮移入后的效果*/
    $('.ser2').mouseover(function(){
        $('.ser1 input').css({'border':'1px solid #aaa','border-right':'none'});
        $(this).css({
            'background':'orange',
            'color':'#fff',
            'border':'none'
        })
    })
    $('.ser2').mouseout(function(){
        $('.ser1 input').css('border','1px solid #ccc');
        $(this).css({
            'background':'#fff',
            'color':'#000',
            'border':'1px solid #aaa',
            'border-left':'none'
        })
    })
    /*表单获取焦点*/
    $('.ser1 input').focus(function(){
        flag = false;
        $(this).css('border-color','orange');
        $('.ser2').css('border-color','orange');
        $('.keywordsList').css('border-color','orange');
        $('.keywordsList').removeClass('hide')
    }).blur(function(){
        flag = true;
        $(this).css('border-color','#ccc');
        $('.ser2').css('border-color','#ccc');
        $('.keywordsList').css('border-color','#ccc');
        $('.keywordsList').addClass('hide')
    })
    /*导航效果*/
    $('.nav li').mouseover(function(){
        $(this).children('a').css('color','#ff6700');
        if($(this).index() < 7){
            $('.select').removeClass('hide');
            $('.select').slideDown().finish();
            $('.select').find('ul').addClass('hide');
            $('.select').find('ul').eq($(this).index()).removeClass('hide')
        }
    }).mouseout(function(){
        $(this).children('a').css('color','#000');
    })
    $('.nav').mouseout(function(){
        $('.select').slideUp().finish();
    })
    $('.select').find('ul').mouseover(function(){
        $('.select').slideDown().finish();//停止当前动画和
    }).mouseout(function(){
        $('.select').slideUp();
    })
    /*banner轮播图*/
    var num = 0;
    var timer;
    timer = setInterval(autoplay,5000);
    $('.round li').mouseover(function(){
        clearInterval(timer);
        num = $(this).index();
        displayImg();
    });
    $('.banner').mouseover(function(){
        clearInterval(timer);
    }).mouseout(function(){
        timer = setInterval(autoplay,5000);
    });
    $('.direcL').click(function(){
        //上一张
        clearInterval(timer);
        num = num - 1;
        if(num < 0){
            num = 4;
        }
        displayImg();
    })
    $('.direcR').click(function(){
        //下一张
        num = num + 1;
        if(num > 4){
            num = 0;
        }
        displayImg();
    })
    function displayImg(){
        $('.round li').eq(num).css('background','orange').siblings().css({
            'background':'#342416',
            'opacity':'0.8'
        });
        $('.banner > img').eq(num).removeClass('hide').siblings('img').addClass('hide');
    }
    function autoplay(){
        num++;
        if(num > 4){
            num = 0;
        }
        displayImg();
    }
    /*隐藏的导航*/
    $('.navL li').mouseover(function(){
        $(this).css('background','#ff6700');
        $('.navHide').removeClass('hide');
        $('.ulHide').addClass('hide');
        $('.ulHide').eq($(this).index()).removeClass('hide');
    }).mouseout(function(){
        $(this).css('background','transparent');
    })
    /*鼠标移出二级导航的范围后，让它消失*/
    $('.navL').mouseout(function(){
        $('.navHide').addClass('hide')
    })
    /*用户移入三级导航的时候，也要显示*/
    $('.ulHide').mouseover(function(){
        $('.navHide').removeClass('hide');
        $('.navL li').eq($(this).index()).css('background','#ff6700');
    }).mouseout(function(){
            $('.navHide').addClass('hide');
        $('.navL li').eq($(this).index()).css('background','transparent');
        })
    /*明星单品轮播图效果*/
    var timer1 = setInterval(autoN,5000);
    $('.scroll li h2 a').mouseover(function(){
        $(this).css('color','rgb(205,103,0)');
    }).mouseout(function(){
        $(this).css('color','#000');
    });
    $('.next').mouseover(function(){
        $('.next').css('color','rgb(205,103,0)');
    }).mouseout(function(){
        $('.next').css('color','rgb(176, 180, 188)');
    });
    $('.p').mouseover(function(){
        clearInterval(timer1);
    }).mouseout(function(){
        timer1 = setInterval(autoN,3000)
    });
    $('.next').click(function(){
        if(index < 1){
            index ++ ;
            autoN();
        }
    });
    $('.prev').click(function(){
        if(index > 0){
            index--;
            autoN();
        }
    });
    function autoN(){
        if($('.scroll').css('left') != '0px'){
            $('.scroll').css('left','0');
        }else if($('.scroll').css('left') == '0px'){
            $('.scroll').css('left','-100%');}
    }
    /*智能硬件*/
    $('.list > img').mouseover(function(){
        $('.list > img').css({'boxShadow':'0 0 28px rgb(170,170,170)','marginTop':'12px'})
    }).mouseout(function(){
        $('.list > img').css({'boxShadow':'none','marginTop':'14px'})
    });
    $('.productR li').mouseover(function(){
        $(this).css({'boxShadow':'0 0 28px rgb(170,170,170)','marginTop':'12px'})
    }).mouseout(function(){
        $(this).css({'boxShadow':'none','marginTop':'14px'})
    });
    $('.productR li h2 a').mouseover(function(){
        $(this).css('color','rgb(255,103,0)');
    }).mouseout(function(){
        $(this).css('color','#000');
    })
    /*公共导航效果*/
    $('.listn li').mouseover(function(){
        $(this).css({
            'borderBottom':'2px solid rgb(255, 103, 0)',
            'color':'rgb(255, 103, 0)',
            'paddingBottom':'5px'
        });
        $(this).siblings('li').css({'borderBottom': 'none','color': '#000'});
    });
    /*公共左侧效果*/
    $('.productL li').mouseover(function(){
        $(this).css({'boxShadow':'0 0 28px rgb(170,170,170)','marginTop':'12px'});
        $(this).next().css('marginTop','16px');
    }).mouseout(function(){
        $(this).css('marginTop','14px');
        $(this).next().css('marginTop','14px')
    });
    $('.productL li:last-child').mouseout(function(){
        $('.productL li:last-child').css('boxShadow','none')
    });
    /*公共右侧效果*/
    $('.productR > ul > li').mouseover(function(){
        $(this).find('.slide').stop(true,false).slideDown('fast');
        $('.slide').eq($(this).index()).css('display','block')
    }).mouseout(function(){
        $(this).find('.slide').stop(true,false).slideUp('fast');
    });
    $('.productR > ul > li:last-child').mouseover(function(){
        $('.productR > ul > li:last-child').css({
            'background':'none',
            'boxShadow':'none',
            'marginTop':'14px'
        })
    }).mouseout(function(){
        $('.productR > ul > li:last-child').css('marginTop','14px')
    })
    $('.twoRow > li').mouseover(function(){
        $(this).css({'marginTop':'12px','boxShadow':'0 0 28px rgb(170,170,170)'})
        $(this).next().css('marginTop','16px')
    }).mouseout(function(){
        $(this).css({'marginTop':'14px','boxShadow':'0 0 28px rgb(170,170,170)'})
        $(this).next().css('marginTop','14px')
    });
    $('.twoRow > li:last-child').mouseout(function(){
        $('.twoRow > li:last-child').css('boxShadow','none')
    })
    /*搭配*/
    $('.list1 li').mouseover(function(){
        $('.productR1 > ul').addClass('hide');
        $('.productR1 > ul').eq($(this).index()).removeClass('hide')
    })
    /*配件*/
    $('.list2 li').mouseover(function(){
        $('.productR2 > ul').addClass('hide');
        $('.productR2 > ul').eq($(this).index()).removeClass('hide')
    })
    /*周边*/
    $('.list3 li').mouseover(function(){
        $('.productR3 > ul').addClass('hide');
        $('.productR3 > ul').eq($(this).index()).removeClass('hide')
    })
    /*为你推荐*/
    $('.scroll1 li').mouseover(function(){
        $(this).find('img').css('marginTop','45px')
    }).mouseout(function(){
        $(this).find('img').css('marginTop','50px')
    })
    /*上一张*/
    index=0
    $('.star1 .prev2').mouseover(function(){
        $(this).css('color','rgb(255,103,0)')
    }).click(function(){
        if(index > 0){
           index --
        }
        $('.scroll1').css('left',- (index * 1226) + 'px')
    }).mouseout(function(){
        $(this).css('color','#ccc')
    });
    /*下一张*/
    $('.star1 .next2').mouseover(function(){
        $(this).css('color','rgb(255,103,0)')
    }).click(function(){
        if(index < 3){
            index++
        }
        $('.scroll1').css('left',- (index * 1226) + 'px')
    }).mouseout(function(){
        $(this).css('color','#ccc')
    });

    /*内容*/
    $('.contList li').mouseover(function(){
        $(this).find('.p2').css('opacity','1')
    }).mouseout(function(){
        $(this).find('.p2').css('opacity','0')
    });
    $('.p2').mouseover(function(){
        $(this).css('background','rgb(117,117,117)')
    }).mouseout(function(){
        $(this).css('background','rgb(176,176,176)')
    });
    /*左*/
    var index = 0;
    $('.next1').click(function(){
        if(index < 3){
            index++;
        }
        $(this).siblings('.contBox').css('left',- (index * 296) + 'px');
        $(this).parent().children('.round2').children('li').eq(index).addClass('dian').siblings().removeClass('dian')
    });
    /*右*/
    $('.prev1').click(function(){
        if(index > 0){
            index -- ;
        }
        $(this).siblings('.contBox').css('left',- (index * 296) + 'px')
        $(this).parent().children('.round2').children('li').eq(index).addClass('dian').siblings().removeClass('dian')
    });
    /*按钮切换图片*/
    $('.contList .round2 li').click(function(){
        $(this).parents('.contList').find('.contBox').css('left',(-296 * $(this).index()) + 'px');
        $(this).addClass('dian').siblings().removeClass('dian')
    })
    /*视频*/
    $('.videoList li img').mouseover(function(){
        //console.log($(this).next())
        $(this).next('.videoList li > div').css('color','rgb(255,103,0)')
    }).mouseout(function(){
        $(this).next('.videoList li > div').css('color','#fff')
    })
    $('.list .toAll').mouseover(function(){
        $('.toAll a').css('color','rgb(255,103,0)');
        $('.toAll i').css('color','rgb(255,103,0)');
    }).mouseout(function(){
        $('.toAll a').css('color','#333');
        $('.toAll i').css('color','rgb(176, 176, 176)');
    })
    /*底部*/
    $('.navF li a').mouseover(function(){
        $(this).css('color','rgb(255,103,0)');
    }).mouseout(function(){
        $(this).css('color','#616161');
    })
    $('.linkF a').mouseover(function(){
        $(this).css('color','rgb(255,103,0)')
    }).mouseout(function(){
        $(this).css('color','rgb(97,97,97)')
    })
    $('.hotLine > div').mouseover(function(){
        $(this).css({'color':'#fff','background':'rgb(255,103,0)'})
    }).mouseout(function(){
        $(this).css({'color':'rgb(255,103,0)','background':'#fff'})
    })
})
