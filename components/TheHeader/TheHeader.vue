<template>
    <div class="main">
        <div class="wrapper">
            <div class="content">
                <div class="text">
                    <div class="heading">
                        <p class="head">Шкодинг</p>
                    </div>
                    <div class="description">
                        <p class="description-text"> 
                            Открытые онлайн-уроки
                            для детей или родителей
                        </p>
                    </div>
                </div>
                <div class="icon">
                    <p class="emoji">🚀</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main{
    background-color: #f7d355;
}
.wrapper{
    min-height: 235px;
    /* max-width: 900px;
    min-width: 900px; */
}
.content{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 47px;
    margin-left: 15%;
    margin-right: 15%;
}
.text{
     width: 490px;
}
.head{
    line-height: 87px;
    font-size: 70px;
    letter-spacing: 3px;
    text-align: left;
    font-weight: bold;
}
.description-text{
    font-weight: 500;
    line-height: 25px;
    font-size: 22px;
    text-align: left;
    letter-spacing: 0.6px;
    max-width: 350px;
}
.icon{
    letter-spacing: 3px;
    font-weight: 500;
    line-height: 225px;
    font-size: 180px;
    text-align: center;
    margin-top: -20px;
}
.emoji{
    font-size: 150px;
}
</style>

