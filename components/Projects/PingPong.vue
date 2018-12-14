<template>
    <div class="main">
        <div class="wrapper">
            <div class="content">
            <div class="headline">
                <p>средний</p>
                <p>30 минут</p>
            </div>
            <div class="name">
                <p class="lesson">Третий урок:</p>
                <p class="topic">Игра «Пинг понг»</p>
            </div>
            <div class="description">
                <div class="description-content">
                <p>Научимся создавать объекты, которые летают и отталкиваются 
                    от стен. Зададим поведение мячика при ударе о ракетку
                </p>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
<style scoped>

.main{
    font-weight: 400;
    font-style: normal;
    color: white;
}
.wrapper{
    min-height: 440px;
    background-color: rgb(230, 148, 63);
    margin-left: 66px;
    margin-right: 66px;
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.content{
    position: relative;
    top: -60px; 
}
.headline{
    position: relative;
    margin-right: 60px;
    line-height: 31px;
    font-size: 25px;
    text-align:right;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.5);
}
.name{
    line-height: 56px;
    font-size: 45px;
    text-align: center;
}
.topic{
    font-weight: bold;
    font-style: normal;
}
.description{
    
    line-height: 31px;
    font-size: 25px;
    text-align: center;
}
.description-content{
    position: relative;
    top: 60px;
    /* width: 200px; */
}

</style>