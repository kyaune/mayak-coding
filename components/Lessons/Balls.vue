<template>
    <div class="main">
        <div class="wrapper">
            <div class="content">
            <div class="headline">
                <p>простой</p>
                <p>20 минут</p>
            </div>
            <div class="name">
                <p class="lesson">Первый урок:</p>
                <p class="topic">Анимация «Шарики»</p>
            </div>
            <div class="description">
                <div class="description-content">
                <p>Установим необходимую программу, покажем как её запускать, 
                    и выводить на экран разноцветные круги
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
    margin-bottom: 20px;
}
.wrapper{
    height: 228px;
    background-color: rgb(224, 84, 67);
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.content{
    margin-left: 26px;
    margin-right: 26px;
}
.headline{
    display: flex;
    justify-content: space-between;
    line-height: 16px;
    font-size: 13px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.5);
    margin-top: -30px;
}
.name{
    line-height: 31px;
    font-size: 25px;
    text-align: center;
    margin-top: 20px;
}
.topic{
    font-weight: bold;
    font-style: normal;
    margin-bottom: 15px;
}
.description{
    line-height: 19px;
    font-size: 15px;
    text-align: center;
    padding-left: 40px;
    padding-right: 40px;
}


</style>
