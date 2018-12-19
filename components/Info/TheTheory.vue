<template>
    <div class="main">
        <div class="wrapper">
            <div class="head">
            <p class="header">Теория</p>
            </div>
            <div class="description">
                <p class="text">
                    В уроках слева есть все необходимое, чтобы их проходить. 
                    Но если вы хотите лучше понять какую-то тему, можете 
                    посмотреть отдельные теоретические уроки
                </p>
            </div>
            <div class="hyper">
                <ul>
                    <li class="way"><a href="#">Массивы (15 минут)</a></li>
                    <li class="way"><a href="#">Arraylist (25 минут)</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .main{
        font-style: normal;
        text-align: left;
        line-height: 1px;
        margin-bottom: 40px;
        /* margin-left: 70px; */
    }
    .head{
        font-weight: bold;
        line-height: 25px;
        font-size: 20px;

    }
    .description{
        line-height: 19px;
        font-size: 15px;
        padding-top: 8px;
    }
    ul{
        list-style-type: none;
    }
    li{
        margin-top: 25px;
        margin-bottom: 25px;
    }
</style>