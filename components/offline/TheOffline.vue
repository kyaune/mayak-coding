<template>
    <div class="main">
        <div class="wrapper">
            <h1>Офлайн-курсы</h1>
            <div class="content">
                <div class="next">
                    <p class="name">Будет:</p>
                    <p class="topic"><a href="">Годовая программа по разработке игр</a></p>
                </div>
                <div class="prev">
                    <p class="name">Было:</p>
                    <p class="topic"><a href="">Летний лагерь по разработке игр</a></p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .main{
        margin-bottom: 80px;
        margin-left: 66px;
    }
    .content{
        display: flex;
        flex-direction: column;
        margin-left: 50px;
    }
    h1{
        line-height: 56px;
        font-size: 45px;
        text-align: left;
        font-weight: bold;
    }
    .name{
        font-weight: 400;
        font-style: italic;
        line-height: 31px;
        font-size: 25px;
        text-align: left;
    }
    .topic{
        font-weight: 400;
        font-style: normal;
        line-height: 44px;
        font-size: 35px;
        text-align: left;
    }
</style>
