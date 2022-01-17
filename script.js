var objects = [
    {
        sentence: 'アニメ鬼滅の刃の主人公の名前は？',
        answer: '竈門炭治郎'
    },
    {
        sentence: '進撃の巨人の主人公の名前は？',
        answer:'エレン・イェーガ'
    },
    {
        sentence:'人気YouTuber SEIKINの弟は誰？',
        answer:'HIKAKIN'
    },
    {
        sentence:'EAが制作した人気バトルロワイヤルゲームのタイトルは？',
        answer:'Apex Legends'
    },
    {
        sentence:'2020年にMiHoYoがリリースしたゲームのタイトルは？',
        answer:'原神'
    }
];

function checkAnswer(input) {
    var isCorrect = false;
    if(input == this.answer) {
        isCorrect = true;
    }
    return isCorrect;
}

function getObjects() {
    for(var i = 0; i < objects.length; i++) {
        var object = objects[i];
        object.check = checkAnswer;
    }
    return objects;
}