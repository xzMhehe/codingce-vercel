$(function () {
    var botui = new BotUI("hello-xinze");
    botui.message.add({delay: 800, content: "Hi, thereð"}).then(function () {
        botui.message.add({delay: 1100, content: "è¿éæ¯åä¸»å°å±â¨ "}).then(function () {
            botui.message.add({delay: 1100, content: "ä¸ä¸ªç§¯æåä¸çBoy~~"}).then(function () {
                botui.action.button({
                    delay: 1600,
                    action: [{text: "ç¶åå¢ï¼ ð", value: "sure"}, {text: "å°åºè¯ï¼ ð", value: "skip"}]
                }).then(function (a) {
                    "sure" == a.value && sure();
                    "skip" == a.value && end()
                })
            })
        })
    });
    var sure = function () {
        botui.message.add({delay: 600, content: "ð"}).then(function () {
            secondPart()
        })
    }, end = function () {
        botui.message.add({
            delay: 600,
            content: "åè¾äºæ¨åï¼"
        })
    }, secondPart = function () {
        botui.message.add({delay: 1500, content: "ç°å°±è¯»äºå¤©æ´¥çå·¥å¤§å­¦"}).then(function () {
            botui.message.add({delay: 1500, content: "ä¸ææ å95åç¨åºç¿"}).then(function () {
                botui.message.add({delay: 1200, content: "å°æ²ä»£ç çæä¸ç§å¿«ä¹"}).then(function () {
                    botui.message.add({
                        delay: 1500,
                        content: "æ¥æä¸å¹´ Java å¼åç»éªï¼çç»ä½¿ç¨ Spring Boot æ¡æ¶ï¼äºè§£ Redis ç­ç¼å­ç»ä»¶ã"
                    }).then(function () {
                        botui.message.add({delay: 1800, content: "åæ¬¢å¬é³ä¹ãæ¥è§¦æ°äºç©ãææ¸¸æ"}).then(function () {
                            botui.action.button({
                                delay: 1100,
                                action: [{text: "ä¸ªäººç®ä»æ¯ä»ä¹å¢ï¼ð¤", value: "what-info"}]
                            }).then(function () {
                                thirdPart()
                            })
                        })
                    })
                })
            })
        })
    }, thirdPart = function () {
        botui.message.add({delay: 1e3, content: "çæ´»å¯è½ä¸åä½ æ³è±¡çé£ä¹å¥½, ä½æ¯ä¹æ¯ä¸ä¼åä½ æ³è±¡çé£ä¹ç³ ~"}).then(function () {
            botui.action.button({delay: 1500, action: [{text: "ååæä»ä¹å«ä¹åï¼", value: "why-domain"}]}).then(function (a) {
                fourthPart()
            })
        })
    }, fourthPart = function () {
        botui.message.add({delay: 1e3, content: "emmmmmï¼code create life ð"}).then(function () {
            botui.message.add({delay: 1600, content: "é£ä¹ï¼ç¸éå°±æ¯ç¼åï¼èµä¸ªèµå§ ^_^"})
        })
    }
})
