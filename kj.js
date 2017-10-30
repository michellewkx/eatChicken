/*
* @Author: michellewkx
* @Date:   2017-10-29 22:48:49
* @Last Modified by:   michellewkx
* @Last Modified time: 2017-10-30 01:05:39
*/
var testJson = {
    "actors": [ // 玩家列表
        {
            "x": "20%",  // 世界坐标X
            "y": "20%",  // 世界坐标Y
            "z": "20%",  // 世界坐标Z
            "distance": "100.23",  // 距离玩家的距离（米）
            "health": "10",
            "max_health": "100"
        },
		{
            "x": "78%",  // 世界坐标X
            "y": "58%",  // 世界坐标Y
            "z": "78%",  // 世界坐标Z
            "distance": "100.23",  // 距离玩家的距离（米）
            "health": "10",
            "max_health": "100"
        },
		{
            "x": "40%",  // 世界坐标X
            "y": "40%",  // 世界坐标Y
            "z": "50%",  // 世界坐标Z
            "distance": "100.23",  // 距离玩家的距离（米）
            "health": "10",
            "max_health": "100"
        },
		{
            "x": "56%",  // 世界坐标X
            "y": "55%",  // 世界坐标Y
            "z": "50%",  // 世界坐标Z
            "distance": "100.23",  // 距离玩家的距离（米）
            "health": "10",
            "max_health": "100"
        },
		{
            "x": "46%",  // 世界坐标X
            "y": "48%",  // 世界坐标Y
            "z": "50%",  // 世界坐标Z
            "distance": "100.23",  // 距离玩家的距离（米）
            "health": "10",
            "max_health": "100"
        },
    ],
    "items": [  // 物品列表
        {
            "x": "33%",
            "y": "83%",
            "z": "-109",
            "distance": "102",
            "type": "1",  // 物品类型
        },
		{
            "x": "66%",
            "y": "25%",
            "z": "-109",
            "distance": "102",
            "type": "1",  // 物品类型
        },
		{
            "x": "26%",
            "y": "55%",
            "z": "-109",
            "distance": "102",
            "type": "1",  // 物品类型
        },
		{
            "x": "36%",
            "y": "50%",
            "z": "-109",
            "distance": "102",
            "type": "1",  // 物品类型
        },
		{
            "x": "39%",
            "y": "59%",
            "z": "-109",
            "distance": "102",
            "type": "1",  // 物品类型
        },
    ],
    "player": {  // 玩家数据
        "x": "10%",
        "y": "30%",
        "z": "300"
    },
    "timestamp": "100213012"  // 数据采集的时间（UNIX时戳）
};

var getData = function () {
	$.ajax({
		url: '/getData',
		type: 'GET',
	})
	.done(function(data) {
		console.log("调用数据成功");
		renderData(data);
	})
	.fail(function(data) {
		console.log("调用失败");
	})
	.always(function(data) {
		console.log("调用数据为：" + data);
	});
}

var renderData = function (data) {
	clearIcon();
	var actors = data.actors;
	var items = data.items;
	var player = new Array(data.player);
	renderPosition(actors,0);
	renderPosition(items,1);
	renderPosition(player,2);
	console.log('success');
}
var clearIcon = function () {
	$('i').remove();
}
var renderPosition = function (list,type) {
	var iconList = [
		'<i class="icon-emo-angry"></i>',
		'<i class="icon-spin1"></i>',
		'<i class="icon-emo-happy"></i>'
	];
	for (var i = 0; i < list.length; i++) {
		$(iconList[type]).css({
			"top": list[i].y,
			"left": list[i].x
		}).appendTo('.warWrapper').attr('title', JSON.stringify(list[i]),null,'\t');
	}
}

var init = function () {
	$('.warWrapper').width($('.war').width());
	$('.warWrapper').height($('.war').height());
	setInterval(renderData, 3000, testJson);
	$(document).tooltip();
}

init();
