<!-- 신청 학생 뷰 페이지 -->
<template>
  <div class="bg-light">
    <v-base></v-base>
    <section class="section section-lg-bottom bg-light">
      <div class="container" id="apply">
        <div class="row">
          <!-- 카테고리란 -->
          <div class="col-lg-3">
            <v-category></v-category>
          </div>
          <!-- 공백 -->
          <div class="col-lg-1">
          </div>
          <!-- 지원 현황 -->
          <div class="col-lg-8">
            <div class="row">
              <div class="col-lg-12 text-center">
                <p class="subtitle">Students</p>
                <h2 class="section-title">Applied Students</h2>
              </div>
              <div class="col-lg-12 text-center">
                <div v-if="$store.state.apply.apply_state==0">
                  <div v-for='(sl,index) in stdList' class="col-lg-12 bg-white p-4 rounded shadow my-3">
                    <div class="media align-items-center flex-column flex-sm-row">
                      <!-- 학생 사진 -->
                      <img src="images/career/logo-5.png" class="mr-sm-3 mb-4 mb-sm-0 border rounded p-2" alt="logo-1">
                      <!-- 학생 간단 정보 -->
                      <div class="media-body text-center text-sm-left mb-4 mb-sm-0">
                        <h6 class="mt-0">{{sl.sName}} </h6>
                        <p class="mb-0 text-gray">{{sl.sMajor}} | {{sl.sGrade}} | 학점 3.3</p>
                      </div>
                      <div>
                        <select @change="ynchange(index,$event)">
                          <option value="" selected disabled hidden style="font-color:#aab1bb;">합격여부</option>
                          <option value="1">합격</option>
                          <option value="0">불합격</option>
                        </select>
                      </div>
                      <div>
                        <b-button v-b-modal="modalId(index)">이력서 보기</b-button>
                        <b-modal :id="'modal'+index" title="이력서 세부내용">
                          <div class="row">
                            <div class="col-lg-12 text-center">
                              <img src="images/career/logo-5.png" class="img shadow-sm mr-sm-3 m-3 p-0" alt="logo-1">
                            </div>
                          </div>
                          <p class="my-1">
                            이름: {{sl.sName}}
                          </p>
                          <p class="my-1">
                            소속학과: {{sl.sMajor}}
                          </p>
                          <p class="my-1">
                            학번: {{sl.sNum}}
                          </p>
                          <p class="my-1">
                            전화번호: {{sl.sPhone}}
                          </p>
                          <p class="my-1">
                            E-mail: {{sl.sEmail}}
                          </p>
                          <p class="my-1">
                            -- programming 언어 --
                          </p>
                          <p class="my-1">
                            --나름 고수--
                          </p>
                          <p v-if = "sl.HTML === '나름 고수'" class="my-1">
                            HTML
                          </p>
                          <p v-if = "sl.Javascript === '나름 고수'" class="my-1">
                            Javascript
                          </p>
                          <p v-if = "sl.CSS === '나름 고수'" class="my-1">
                            CSS
                          </p>
                          <p v-if = "sl.jQuery === '나름 고수'" class="my-1">
                            jQuery
                          </p>
                          <p v-if = "sl.SQL === '나름 고수'" class="my-1">
                            SQL
                          </p>
                          <p v-if = "sl.Java === '나름 고수'" class="my-1">
                            Java
                          </p>
                          <p v-if = "sl.AndroidJava === '나름 고수'" class="my-1">
                            AndroidJava
                          </p>
                          <p v-if = "sl.Swift === '나름 고수'" class="my-1">
                            Swift
                          </p>
                          <p v-if = "sl.Objective === '나름 고수'" class="my-1">
                            Objective
                          </p>
                          <p v-if = "sl.Python === '나름 고수'" class="my-1">
                            Python
                          </p>
                          <p v-if = "sl.PHP === '나름 고수'" class="my-1">
                            PHP
                          </p>
                          <p v-if = "sl.C === '나름 고수'" class="my-1">
                            C
                          </p>
                          <p v-if = "sl.Microsoft === '나름 고수'" class="my-1">
                            Microsoft
                          </p>
                          <p v-if = "sl.Kotlin === '나름 고수'" class="my-1">
                            Kotlin
                          </p>
                          <p v-if = "sl.Peral === '나름 고수'" class="my-1">
                            Peral
                          </p>
                          <p v-if = "sl.R === '나름 고수'" class="my-1">
                            R
                          </p>
                          <p v-if = "sl.VBA === '나름 고수'" class="my-1">
                            VBA
                          </p>
                          <p class="my-1">
                            --실무 가능--
                          </p>
                          <p v-if = "sl.HTML === '실무 가능'" class="my-1">
                            HTML
                          </p>
                          <p v-if = "sl.Javascript === '실무 가능'" class="my-1">
                            Javascript
                          </p>
                          <p v-if = "sl.CSS === '실무 가능'" class="my-1">
                            CSS
                          </p>
                          <p v-if = "sl.jQuery === '실무 가능'" class="my-1">
                            jQuery
                          </p>
                          <p v-if = "sl.SQL === '실무 가능'" class="my-1">
                            SQL
                          </p>
                          <p v-if = "sl.Java === '실무 가능'" class="my-1">
                            Java
                          </p>
                          <p v-if = "sl.AndroidJava === '실무 가능'" class="my-1">
                            AndroidJava
                          </p>
                          <p v-if = "sl.Swift === '실무 가능'" class="my-1">
                            Swift
                          </p>
                          <p v-if = "sl.Objective === '실무 가능'" class="my-1">
                            Objective
                          </p>
                          <p v-if = "sl.Python === '실무 가능'" class="my-1">
                            Python
                          </p>
                          <p v-if = "sl.PHP === '실무 가능'" class="my-1">
                            PHP
                          </p>
                          <p v-if = "sl.C === '실무 가능'" class="my-1">
                            C
                          </p>
                          <p v-if = "sl.Microsoft === '실무 가능'" class="my-1">
                            Microsoft
                          </p>
                          <p v-if = "sl.Kotlin === '실무 가능'" class="my-1">
                            Kotlin
                          </p>
                          <p v-if = "sl.Peral === '실무 가능'" class="my-1">
                            Peral
                          </p>
                          <p v-if = "sl.R === '실무 가능'" class="my-1">
                            R
                          </p>
                          <p v-if = "sl.VBA === '실무 가능'" class="my-1">
                            VBA
                          </p>
                          <p class="my-1">
                            --초보 수준--
                          </p>
                          <p v-if = "sl.HTML === '초보 수준'" class="my-1">
                            HTML
                          </p>
                          <p v-if = "sl.Javascript === '초보 수준'" class="my-1">
                            Javascript
                          </p>
                          <p v-if = "sl.CSS === '초보 수준'" class="my-1">
                            CSS
                          </p>
                          <p v-if = "sl.jQuery === '초보 수준'" class="my-1">
                            jQuery
                          </p>
                          <p v-if = "sl.SQL === '초보 수준'" class="my-1">
                            SQL
                          </p>
                          <p v-if = "sl.Java === '초보 수준'" class="my-1">
                            Java
                          </p>
                          <p v-if = "sl.AndroidJava === '초보 수준'" class="my-1">
                            AndroidJava
                          </p>
                          <p v-if = "sl.Swift === '초보 수준'" class="my-1">
                            Swift
                          </p>
                          <p v-if = "sl.Objective === '초보 수준'" class="my-1">
                            Objective
                          </p>
                          <p v-if = "sl.Python === '초보 수준'" class="my-1">
                            Python
                          </p>
                          <p v-if = "sl.PHP === '초보 수준'" class="my-1">
                            PHP
                          </p>
                          <p v-if = "sl.C === '초보 수준'" class="my-1">
                            C
                          </p>
                          <p v-if = "sl.Microsoft === '초보 수준'" class="my-1">
                            Microsoft
                          </p>
                          <p v-if = "sl.Kotlin === '초보 수준'" class="my-1">
                            Kotlin
                          </p>
                          <p v-if = "sl.Peral === '초보 수준'" class="my-1">
                            Peral
                          </p>
                          <p v-if = "sl.R === '초보 수준'" class="my-1">
                            R
                          </p>
                          <p v-if = "sl.VBA === '초보 수준'" class="my-1">
                            VBA
                          </p>
                          <p class="my-1">
                            --맛보기 수준--
                          </p>
                          <p v-if = "sl.HTML === '맛보기 수준'" class="my-1">
                            HTML
                          </p>
                          <p v-if = "sl.Javascript === '맛보기 수준'" class="my-1">
                            Javascript
                          </p>
                          <p v-if = "sl.CSS === '맛보기 수준'" class="my-1">
                            CSS
                          </p>
                          <p v-if = "sl.jQuery === '맛보기 수준'" class="my-1">
                            jQuery
                          </p>
                          <p v-if = "sl.SQL === '맛보기 수준'" class="my-1">
                            SQL
                          </p>
                          <p v-if = "sl.Java === '맛보기 수준'" class="my-1">
                            Java
                          </p>
                          <p v-if = "sl.AndroidJava === '맛보기 수준'" class="my-1">
                            AndroidJava
                          </p>
                          <p v-if = "sl.Swift === '맛보기 수준'" class="my-1">
                            Swift
                          </p>
                          <p v-if = "sl.Objective === '맛보기 수준'" class="my-1">
                            Objective
                          </p>
                          <p v-if = "sl.Python === '맛보기 수준'" class="my-1">
                            Python
                          </p>
                          <p v-if = "sl.PHP === '맛보기 수준'" class="my-1">
                            PHP
                          </p>
                          <p v-if = "sl.C === '맛보기 수준'" class="my-1">
                            C
                          </p>
                          <p v-if = "sl.Microsoft === '맛보기 수준'" class="my-1">
                            Microsoft
                          </p>
                          <p v-if = "sl.Kotlin === '맛보기 수준'" class="my-1">
                            Kotlin
                          </p>
                          <p v-if = "sl.Peral === '맛보기 수준'" class="my-1">
                            Peral
                          </p>
                          <p v-if = "sl.R === '맛보기 수준'" class="my-1">
                            R
                          </p>
                          <p v-if = "sl.VBA === '맛보기 수준'" class="my-1">
                            VBA
                          </p>
                          <p class="my-1">
                            -- Framewokr 언어 --
                          </p>
                          <p class="my-1">
                            --나름 고수--
                          </p>
                          <p v-if = "sl.Nodejs === '나름 고수'" class="my-1">
                            Node.js
                          </p>
                          <p v-if = "sl.Angular === '나름 고수'" class="my-1">
                            Angular
                          </p>
                          <p v-if = "sl.React === '나름 고수'" class="my-1">
                            React
                          </p>
                          <p v-if = "sl.Expressjs === '나름 고수'" class="my-1">
                            Expressjs
                          </p>
                          <p v-if = "sl.NetCore === '나름 고수'" class="my-1">
                            NetCore
                          </p>
                          <p v-if = "sl.Spring === '나름 고수'" class="my-1">
                            Spring
                          </p>
                          <p v-if = "sl.Django === '나름 고수'" class="my-1">
                            Django
                          </p>
                          <p v-if = "sl.Flask === '나름 고수'" class="my-1">
                            Flask
                          </p>
                          <p v-if = "sl.Cordova === '나름 고수'" class="my-1">
                            Cordova
                          </p>
                          <p class="my-1">
                            --실무 가능--
                          </p>
                          <p v-if = "sl.Nodejs === '실무 가능'" class="my-1">
                            Nodejs
                          </p>
                          <p v-if = "sl.Angular === '실무 가능'" class="my-1">
                            Angular
                          </p>
                          <p v-if = "sl.React === '실무 가능'" class="my-1">
                            React
                          </p>
                          <p v-if = "sl.Expressjs === '실무 가능'" class="my-1">
                            Expressjs
                          </p>
                          <p v-if = "sl.NetCore === '실무 가능'" class="my-1">
                            NetCore
                          </p>
                          <p v-if = "sl.Spring === '실무 가능'" class="my-1">
                            Spring
                          </p>
                          <p v-if = "sl.Django === '실무 가능'" class="my-1">
                            Django
                          </p>
                          <p v-if = "sl.Flask === '실무 가능'" class="my-1">
                            Flask
                          </p>
                          <p v-if = "sl.Cordova === '실무 가능'" class="my-1">
                            Cordova
                          </p>
                          <p class="my-1">
                            --초보 수준--
                          </p>
                          <p v-if = "sl.Nodejs === '초보 수준'" class="my-1">
                            Nodejs
                          </p>
                          <p v-if = "sl.Angular === '초보 수준'" class="my-1">
                            Angular
                          </p>
                          <p v-if = "sl.React === '초보 수준'" class="my-1">
                            React
                          </p>
                          <p v-if = "sl.Expressjs === '초보 수준'" class="my-1">
                            Expressjs
                          </p>
                          <p v-if = "sl.NetCore === '초보 수준'" class="my-1">
                            NetCore
                          </p>
                          <p v-if = "sl.Spring === '초보 수준'" class="my-1">
                            Spring
                          </p>
                          <p v-if = "sl.Django === '초보 수준'" class="my-1">
                            Django
                          </p>
                          <p v-if = "sl.Flask === '초보 수준'" class="my-1">
                            Flask
                          </p>
                          <p v-if = "sl.Cordova === '초보 수준'" class="my-1">
                            Cordova
                          </p>
                          <p class="my-1">
                            --맛보기 수준--
                          </p>
                          <p v-if = "sl.Nodejs === '맛보기 수준'" class="my-1">
                            Nodejs
                          </p>
                          <p v-if = "sl.Angular === '맛보기 수준'" class="my-1">
                            Angular
                          </p>
                          <p v-if = "sl.React === '맛보기 수준'" class="my-1">
                            React
                          </p>
                          <p v-if = "sl.Expressjs === '맛보기 수준'" class="my-1">
                            Expressjs
                          </p>
                          <p v-if = "sl.NetCore === '맛보기 수준'" class="my-1">
                            NetCore
                          </p>
                          <p v-if = "sl.Spring === '맛보기 수준'" class="my-1">
                            Spring
                          </p>
                          <p v-if = "sl.Django === '맛보기 수준'" class="my-1">
                            Django
                          </p>
                          <p v-if = "sl.Flask === '맛보기 수준'" class="my-1">
                            Flask
                          </p>
                          <p v-if = "sl.Cordova === '맛보기 수준'" class="my-1">
                            Cordova
                          </p>
                          <p class="my-1">
                            -- Database 언어 --
                          </p>
                          <p class="my-1">
                            --나름 고수--
                          </p>
                          <p v-if = "sl.Mysql === '나름 고수'" class="my-1">
                            Mysql
                          </p>
                          <p v-if = "sl.SQLServer === '나름 고수'" class="my-1">
                            SQLServer
                          </p>
                          <p v-if = "sl.MongoDB === '나름 고수'" class="my-1">
                            MongoDB
                          </p>
                          <p v-if = "sl.SQLite === '나름 고수'" class="my-1">
                            SQLite
                          </p>
                          <p v-if = "sl.Redis === '나름 고수'" class="my-1">
                            Redis
                          </p>
                          <p v-if = "sl.oracle === '나름 고수'" class="my-1">
                            oracle
                          </p>
                          <p v-if = "sl.Flask_data === '나름 고수'" class="my-1">
                            Flask_data
                          </p>
                          <p v-if = "sl.Cordova_data === '나름 고수'" class="my-1">
                            Cordova_data
                          </p>
                          <p class="my-1">
                            --실무 가능--
                          </p>
                          <p v-if = "sl.Mysql === '실무 가능'" class="my-1">
                            Mysql
                          </p>
                          <p v-if = "sl.SQLServer === '실무 가능'" class="my-1">
                            SQLServer
                          </p>
                          <p v-if = "sl.MongoDB === '실무 가능'" class="my-1">
                            MongoDB
                          </p>
                          <p v-if = "sl.SQLite === '실무 가능'" class="my-1">
                            SQLite
                          </p>
                          <p v-if = "sl.Redis === '실무 가능'" class="my-1">
                            Redis
                          </p>
                          <p v-if = "sl.oracle === '실무 가능'" class="my-1">
                            oracle
                          </p>
                          <p v-if = "sl.Flask_data === '실무 가능'" class="my-1">
                            Flask_data
                          </p>
                          <p v-if = "sl.Cordova_data === '실무 가능'" class="my-1">
                            Cordova_data
                          </p>
                          <p class="my-1">
                            --초보 수준--
                          </p>
                          <p v-if = "sl.Mysql === '초보 수준'" class="my-1">
                            Mysql
                          </p>
                          <p v-if = "sl.SQLServer === '초보 수준'" class="my-1">
                            SQLServer
                          </p>
                          <p v-if = "sl.MongoDB === '초보 수준'" class="my-1">
                            MongoDB
                          </p>
                          <p v-if = "sl.SQLite === '초보 수준'" class="my-1">
                            SQLite
                          </p>
                          <p v-if = "sl.Redis === '초보 수준'" class="my-1">
                            Redis
                          </p>
                          <p v-if = "sl.oracle === '초보 수준'" class="my-1">
                            oracle
                          </p>
                          <p v-if = "sl.Flask_data === '초보 수준'" class="my-1">
                            Flask_data
                          </p>
                          <p v-if = "sl.Cordova_data === '초보 수준'" class="my-1">
                            Cordova_data
                          </p>
                          <p class="my-1">
                            --맛보기 수준--
                          </p>
                          <p v-if = "sl.Mysql === '맛보기 수준'" class="my-1">
                            Mysql
                          </p>
                          <p v-if = "sl.SQLServer === '맛보기 수준'" class="my-1">
                            SQLServer
                          </p>
                          <p v-if = "sl.MongoDB === '맛보기 수준'" class="my-1">
                            MongoDB
                          </p>
                          <p v-if = "sl.SQLite === '맛보기 수준'" class="my-1">
                            SQLite
                          </p>
                          <p v-if = "sl.Redis === '맛보기 수준'" class="my-1">
                            Redis
                          </p>
                          <p v-if = "sl.oracle === '맛보기 수준'" class="my-1">
                            oracle
                          </p>
                          <p v-if = "sl.Flask_data === '맛보기 수준'" class="my-1">
                            Flask_data
                          </p>
                          <p v-if = "sl.Cordova_data === '맛보기 수준'" class="my-1">
                            Cordova_data
                          </p>
                          <p class="my-1">
                            -- Clouding 언어 --
                          </p>
                          <p class="my-1">
                            --나름 고수--
                          </p>
                          <p v-if = "sl.AWS === '나름 고수'" class="my-1">
                            AWS
                          </p>
                          <p v-if = "sl.Azure === '나름 고수'" class="my-1">
                            Azure
                          </p>
                          <p v-if = "sl.GCP === '나름 고수'" class="my-1">
                            GCP
                          </p>
                          <p v-if = "sl.Linux === '나름 고수'" class="my-1">
                            Linux
                          </p>
                          <p v-if = "sl.Wordpress === '나름 고수'" class="my-1">
                            Wordpress
                          </p>
                          <p v-if = "sl.Arduino === '나름 고수'" class="my-1">
                            Arduino
                          </p>
                          <p v-if = "sl.Firebase === '나름 고수'" class="my-1">
                            Firebase
                          </p>
                          <p v-if = "sl.Docker === '나름 고수'" class="my-1">
                            Docker
                          </p>
                          <p v-if = "sl.Go === '나름 고수'" class="my-1">
                            Go
                          </p>
                          <p class="my-1">
                            --실무 가능--
                          </p>
                          <p v-if = "sl.AWS === '실무 가능'" class="my-1">
                            AWS
                          </p>
                          <p v-if = "sl.Azure === '실무 가능'" class="my-1">
                            Azure
                          </p>
                          <p v-if = "sl.GCP === '실무 가능'" class="my-1">
                            GCP
                          </p>
                          <p v-if = "sl.Linux === '실무 가능'" class="my-1">
                            Linux
                          </p>
                          <p v-if = "sl.Wordpress === '실무 가능'" class="my-1">
                            Wordpress
                          </p>
                          <p v-if = "sl.Arduino === '실무 가능'" class="my-1">
                            Arduino
                          </p>
                          <p v-if = "sl.Firebase === '실무 가능'" class="my-1">
                            Firebase
                          </p>
                          <p v-if = "sl.Docker === '실무 가능'" class="my-1">
                            Docker
                          </p>
                          <p v-if = "sl.Go === '실무 가능'" class="my-1">
                            Go
                          </p>
                          <p class="my-1">
                            --초보 수준--
                          </p>
                          <p v-if = "sl.AWS === '초보 수준'" class="my-1">
                            AWS
                          </p>
                          <p v-if = "sl.Azure === '초보 수준'" class="my-1">
                            Azure
                          </p>
                          <p v-if = "sl.GCP === '초보 수준'" class="my-1">
                            GCP
                          </p>
                          <p v-if = "sl.Linux === '초보 수준'" class="my-1">
                            Linux
                          </p>
                          <p v-if = "sl.Wordpress === '초보 수준'" class="my-1">
                            Wordpress
                          </p>
                          <p v-if = "sl.Arduino === '초보 수준'" class="my-1">
                            Arduino
                          </p>
                          <p v-if = "sl.Firebase === '초보 수준'" class="my-1">
                            Firebase
                          </p>
                          <p v-if = "sl.Docker === '초보 수준'" class="my-1">
                            Docker
                          </p>
                          <p v-if = "sl.Go === '초보 수준'" class="my-1">
                            Go
                          </p>
                          <p class="my-1">
                            --맛보기 수준--
                          </p>
                          <p v-if = "sl.AWS === '맛보기 수준'" class="my-1">
                            AWS
                          </p>
                          <p v-if = "sl.Azure === '맛보기 수준'" class="my-1">
                            Azure
                          </p>
                          <p v-if = "sl.GCP === '맛보기 수준'" class="my-1">
                            GCP
                          </p>
                          <p v-if = "sl.Linux === '맛보기 수준'" class="my-1">
                            Linux
                          </p>
                          <p v-if = "sl.Wordpress === '맛보기 수준'" class="my-1">
                            Wordpress
                          </p>
                          <p v-if = "sl.Arduino === '맛보기 수준'" class="my-1">
                            Arduino
                          </p>
                          <p v-if = "sl.Firebase === '맛보기 수준'" class="my-1">
                            Firebase
                          </p>
                          <p v-if = "sl.Docker === '맛보기 수준'" class="my-1">
                            Docker
                          </p>
                          <p v-if = "sl.Go === '맛보기 수준'" class="my-1">
                            Go
                          </p>
                          <p class="my-1">
                            -- Machine learnning 언어 --
                          </p>
                          <p class="my-1">
                            --나름 고수--
                          </p>
                          <p v-if = "sl.Tensorflow === '나름 고수'" class="my-1">
                            Tensorflow
                          </p>
                          <p v-if = "sl.Caffe === '나름 고수'" class="my-1">
                            Caffe
                          </p>
                          <p v-if = "sl.OpenCV === '나름 고수'" class="my-1">
                            OpenCV
                          </p>
                          <p v-if = "sl.DLib === '나름 고수'" class="my-1">
                            DLib
                          </p>
                          <p v-if = "sl.OpenGL === '나름 고수'" class="my-1">
                            OpenGL
                          </p>
                          <p v-if = "sl.Unity === '나름 고수'" class="my-1">
                            Unity
                          </p>
                          <p v-if = "sl.Arduino_mac === '나름 고수'" class="my-1">
                            Arduino_mac
                          </p>
                          <p v-if = "sl.Firebase_mac === '나름 고수'" class="my-1">
                            Firebase_mac
                          </p>
                          <p class="my-1">
                            --실무 가능--
                          </p>
                          <p v-if = "sl.Tensorflow === '실무 가능'" class="my-1">
                            Tensorflow
                          </p>
                          <p v-if = "sl.Caffe === '실무 가능'" class="my-1">
                            Caffe
                          </p>
                          <p v-if = "sl.OpenCV === '실무 가능'" class="my-1">
                            OpenCV
                          </p>
                          <p v-if = "sl.DLib === '실무 가능'" class="my-1">
                            DLib
                          </p>
                          <p v-if = "sl.OpenGL === '실무 가능'" class="my-1">
                            OpenGL
                          </p>
                          <p v-if = "sl.Unity === '실무 가능'" class="my-1">
                            Unity
                          </p>
                          <p v-if = "sl.Arduino_mac === '실무 가능'" class="my-1">
                            Arduino_mac
                          </p>
                          <p v-if = "sl.Firebase_mac === '실무 가능'" class="my-1">
                            Firebase_mac
                          </p>
                          <p class="my-1">
                            --초보 수준--
                          </p>
                          <p v-if = "sl.Tensorflow === '초보 수준'" class="my-1">
                            Tensorflow
                          </p>
                          <p v-if = "sl.Caffe === '초보 수준'" class="my-1">
                            Caffe
                          </p>
                          <p v-if = "sl.OpenCV === '초보 수준'" class="my-1">
                            OpenCV
                          </p>
                          <p v-if = "sl.DLib === '초보 수준'" class="my-1">
                            DLib
                          </p>
                          <p v-if = "sl.OpenGL === '초보 수준'" class="my-1">
                            OpenGL
                          </p>
                          <p v-if = "sl.Unity === '초보 수준'" class="my-1">
                            Unity
                          </p>
                          <p v-if = "sl.Arduino_mac === '초보 수준'" class="my-1">
                            Arduino_mac
                          </p>
                          <p v-if = "sl.Firebase_mac === '초보 수준'" class="my-1">
                            Firebase_mac
                          </p>
                          <p class="my-1">
                            --맛보기 수준--
                          </p>
                          <p v-if = "sl.Tensorflow === '맛보기 수준'" class="my-1">
                            Tensorflow
                          </p>
                          <p v-if = "sl.Caffe === '맛보기 수준'" class="my-1">
                            Caffe
                          </p>
                          <p v-if = "sl.OpenCV === '맛보기 수준'" class="my-1">
                            OpenCV
                          </p>
                          <p v-if = "sl.DLib === '맛보기 수준'" class="my-1">
                            DLib
                          </p>
                          <p v-if = "sl.OpenGL === '맛보기 수준'" class="my-1">
                            OpenGL
                          </p>
                          <p v-if = "sl.Unity === '맛보기 수준'" class="my-1">
                            Unity
                          </p>
                          <p v-if = "sl.Arduino_mac === '맛보기 수준'" class="my-1">
                            Arduino_mac
                          </p>
                          <p v-if = "sl.Firebase_mac === '맛보기 수준'" class="my-1">
                            Firebase_mac
                          </p>

                        </b-modal>
                      </div>
                      <!-- 학생 상세 정보 버튼 -->
                      <!-- <a href="#" @click="finishJudge(index,sl.selected)" class="btn btn-outline-primary">심사 완료</a> -->
                    </div>
                  </div>
                </div>
                <v-error v-else-if="$store.state.apply.apply_state==1"></v-error>
              </div>

              <div class="col-12 text-center" style="font-size: 15px">
                내 상태 : {{cStatus}}
              </div><br/>


              <div class="col-12 text-center">
                <br/>
                <button class="btn btn-primary" @click="finishJudge()">심사 완료</button>
                <button class="btn btn-primary ml-2" v-if="cStatus=='심사중'" @click="changeStatus()">지원 그만 받기</button>
              </div>
              <div class="col-12 text-center">
                <div id="chart">
                  <!--<apexchart id ="mychart" type=bar height=350 :options="chartOptions" :series="series"/>-->
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
    <v-footer class="mt-4"></v-footer>
  </div>
</template>

<script>
  import { mapGetters, mapActions} from 'vuex'
  import myModal from './myModal'
  import VBase from '../Base/Index.vue'
  import VCategory from '../Category/Index.vue'
  import VueApexCharts from 'vue-apexcharts'
  import VError from './Error.vue'
  import VNoNoticeError from './NoNoticeError.vue'
  import Const from '../../constant/constant';
  import VFooter from '../Footer/Index.vue'



  var colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8'];

  export default{
      name: 'Apply',
      data() {
        return {
          applylist:[],
          selectedCo:[],
          stdList : [],
          user : {},
          cloudeLang : [],
            applyOrder : "",
            applySemester : "",
          selected : [],
          visible : false,
          judgeStdinfo:[],
            confirm : -1,
            cStatus : "",
            userProgrammingLang:[],
            userMachineLang:[],
            userFrameworkLang:[],
            userDatabaseLang:[],
            userCloudLang:[],
            userGrade:[],
            userEng:[],
            series: [{
                name: 'C언어 수준',
                data: []
            }],
            chartOptions: {
                chart: {
                    height: 350,
                    type: 'bar',
                    events: {
                        }
                    },
                },
                colors: colors,
                plotOptions: {
                    bar: {
                        columnWidth: '45%',
                        distributed: true,
                        dataLabels: {
                            position: 'top', // top, center, bottom
                        },
                    }
                },
                title: {
                    text: 'C언어',
                    align: 'center',
                    style: {
                        fontSize: '20px'
                    }
                },
                subtitle: {
                    text: '0 : 배운적 없음,  1 : 맛보기 수준,  2 : 초보 수준,  3 : 실무 가능,  4 : 나름 고수',
                    align: 'center',
                },
                dataLabels: {
                    enabled: true,
                    formatter: function (val) {
                        return val;
                    },
                    offsetY: -20,
                    align: 'top',
                    style: {
                        fontSize: '12px',
                        colors: ["#304758"]
                    }
                },
                xaxis: {
                    categories: [],
                    labels: {
                        style: {
                            colors: colors,
                            fontSize: '14px'
                        }
                    }
                },
                yaxis: {
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false,
                    },
                    labels: {
                        show: false,
                        position: 'top',
                        formatter: function (val) {
                            return val;
                        }
                    }

                }

>>>>>>> c87c3fd787c1a2fe16b37ba6488b64830ec977cd
        }
      },
      components: {
        VBase,
        VCategory,
          VError,
          VFooter,

          appMyModal: myModal,
          apexchart: VueApexCharts,
      },
      // async beforeMount(){
      //     // await this.$http.get(Const.API_SERVER + '/' ,{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
      //     //     this.user = res.data.user;
      //     //     return this.user;
      //     // });
      //     // await this.getSemester();
      // },
      async created(){
        await this.$http.get(Const.API_SERVER + '/' ,{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
          this.user = res.data.user;
          return this.user;
        });
        await this.getSemester();
      },
      methods: {
        modalId(i) {
          // console.log(i);
          return 'modal' + i;
        },
        ynchange(index,event){
          this.stdList[index].YN = event.target.value;
        },
          async getSemester(){
              await this.$http.get(Const.API_SERVER+'/admin/recentApplyTerm').then((response) => {
                  this.applyOrder = response.data.applyOrder;
                  this.applySemester = response.data.applySemester;
                  var data = {
                      applyOrder : this.applyOrder,
                      applySemester : this.applySemester,
                  };
                  this.applyList(this.applyOrder,this.applySemester);
                  this.loadCstatus(this.applyOrder,this.applySemester)
              });
          },
        applyList(order,semester){
          this.$http.get(Const.API_SERVER+'/co/mypage/watchApplyStd',{params:{cLoginID : this.user.loginId, applyOrder: order,applySemester:semester }}).then((response) => {
              if(response.data =='기간이 없음'){
                  alert('기간이 없습니다.')
                  // this.$router.push({name: "Home"})
              }
              else if(response.data=='공고가 없음'){
                  alert('공고를 작성하지 않으셨습니다.')
                  this.$router.push({name: "Home"})
              }
              else if(response.data=='공고 신청을 하지 않음'){
                  alert('공고신청을 하지 않으셨습니다.')
                  this.$router.push({name: "Home"})
              }
              else if(response.data=='신청한 학생이 없음'){
                  this.$store.dispatch('apply/setApplyState',1);
                  // this.confirm=0
              }
              else if(response.data=='이미 선발을 완료 하였습니다.'){
                alert('이미 선발을 완료 하였습니다.')
                  this.$router.push({name: "Home"})
              }
              else {
                  // this.confirm = 1
                  this.$store.dispatch('apply/setApplyState',0);
                  for (var i = 0; i < response.data.length; i++) {
                      var programmingLang = JSON.parse(response.data[i].programmingLang);
                      var frameworkLang = JSON.parse(response.data[i].frameworkLang);
                      var databaseLang = JSON.parse(response.data[i].databaseLang);
                      var cloudLang = JSON.parse(response.data[i].cloudLang);
                      var machineLang = JSON.parse(response.data[i].machineLang)
                      this.stdList.push({
                          sName: response.data[i].sName,
                          sMajor: response.data[i].sMajor,
                          sGrade: response.data[i].sGrade,
                          stdApplyCoID: response.data[i].stdApplyCoID,
                          sNum: response.data[i].sNum,
                          sEmail: response.data[i].sEmail,
                          sPhone: response.data[i].sPhone,
                          YN: "-1",
                          //programming Lang
                          Javascript: programmingLang.Javascript,
                          HTML: programmingLang.HTML,
                          CSS: programmingLang.CSS,
                          jQuery: programmingLang.jQuery,
                          SQL: programmingLang.SQL,
                          Java: programmingLang.Java,
                          AndroidJava: programmingLang.AndroidJava,
                          Swift: programmingLang.Swift,
                          Objective: programmingLang.Objective,
                          Python: programmingLang.Python,
                          PHP: programmingLang.PHP,
                          C: programmingLang.C,
                          Microsoft: programmingLang.Microsoft,
                          Kotlin: programmingLang.Kotlin,
                          Peral: programmingLang.Peral,
                          R: programmingLang.R,
                          VBA: programmingLang.VBA,
                          //framework Lang
                          Nodejs : frameworkLang.Nodejs,
                          Angular : frameworkLang.Angular,
                          React : frameworkLang.React,
                          Expressjs : frameworkLang.Expressjs,
                          NetCore : frameworkLang.NetCore,
                          Spring : frameworkLang.Spring,
                          Django : frameworkLang.Django,
                          Flask : frameworkLang.Flask,
                          Cordova : frameworkLang.Cordova,
                          //database Lang
                          MySql : databaseLang.MySql,
                          SQLServer : databaseLang.SQLServer,
                          MongoDB : databaseLang.MongoDB,
                          SQLite : databaseLang.SQLite,
                          Redis : databaseLang.Redis,
                          Oracle : databaseLang.Oracle,
                          Flask_data : databaseLang.Flask,
                          Cordova_data : databaseLang.Cordova,
                          // clouding Lang
                          AWS : cloudLang.AWS,
                          Azure : cloudLang.Azure,
                          GCP : cloudLang.GCP,
                          Linux : cloudLang.Linux,
                          Wordpress : cloudLang.Wordpress,
                          RaspberryPi : cloudLang.RaspberryPi,
                          Arduino : cloudLang.Arduino,
                          Firebase : cloudLang.Firebase,
                          Docker : cloudLang.Docker,
                          Go : cloudLang.Go,
                          //machine learnnig Lang
                          Tensorflow : machineLang.Tensorflow,
                          Caffe : machineLang.Caffe,
                          OpenCV : machineLang.OpenCV,
                          DLib : machineLang.DLib,
                          OpenGL : machineLang.OpenGL,
                          Unity : machineLang.Unity,
                          Arduino_mac : machineLang.Arduino,
                          Firebase_mac : machineLang.Firebase,
                          })
                      this.userProgrammingLang.push({
                          Javascript: programmingLang.Javascript,
                          HTML: programmingLang.HTML,
                          CSS: programmingLang.CSS,
                          jQuery: programmingLang.jQuery,
                          SQL: programmingLang.SQL,
                          Java: programmingLang.Java,
                          AndroidJava: programmingLang.AndroidJava,
                          Swift: programmingLang.Swift,
                          Objective: programmingLang.Objective,
                          Python: programmingLang.Python,
                          PHP: programmingLang.PHP,
                          C: programmingLang.C,
                          Microsoft: programmingLang.Microsoft,
                          Kotlin: programmingLang.Kotlin,
                          Peral: programmingLang.Peral,
                          R: programmingLang.R,
                          VBA: programmingLang.VBA
                      })
                      this.userFrameworkLang.push({
                      Nodejs : frameworkLang.Nodejs,
                      Angular : frameworkLang.Angular,
                      React : frameworkLang.React,
                      Expressjs : frameworkLang.Expressjs,
                      NetCore : frameworkLang.NetCore,
                      Spring : frameworkLang.Spring,
                      Django : frameworkLang.Django,
                      Flask : frameworkLang.Flask,
                      Cordova : frameworkLang.Cordova})
                      //
                      // this.userDatabaseLang.push({
                      // MySql : databaseLang.MySql,
                      // SQLServer : databaseLang.SQLServer,
                      // MongoDB : databaseLang.MongoDB,
                      // SQLite : databaseLang.SQLite,
                      // Redis : databaseLang.Redis,
                      // Oracle : databaseLang.Oracle,
                      // Flask_data : databaseLang.Flask,
                      // Cordova_data : databaseLang.Cordova})
                      //
                      // this.userCloudLang.push({
                      // AWS : cloudLang.AWS,
                      // Azure : cloudLang.Azure,
                      // GCP : cloudLang.GCP,
                      // Linux : cloudLang.Linux,
                      // Wordpress : cloudLang.Wordpress,
                      // RaspberryPi : cloudLang.RaspberryPi,
                      // Arduino : cloudLang.Arduino,
                      // Firebase : cloudLang.Firebase,
                      // Docker : cloudLang.Docker,
                      // Go : cloudLang.Go})

                      // this.userMachineLang.push({
                      //     Tensorflow : machineLang.Tensorflow,
                      // Caffe : machineLang.Caffe,
                      // OpenCV : machineLang.OpenCV,
                      // DLib : machineLang.DLib,
                      // OpenGL : machineLang.OpenGL,
                      // Unity : machineLang.Unity,
                      // Arduino_mac : machineLang.Arduino,
                      // Firebase_mac : machineLang.Firebase
                      // })
                  }
              }
              this.chart(this.stdList)
          })
        },
            chart(stdList) {
            var a= []
                var b = []
                for (var i = 0; i < stdList.length; i++) {
                    b.push(stdList[i].sName)
                    if (this.userProgrammingLang[i].C == '배운적 없음')
                        this.userProgrammingLang[i].C = 0
                    else if (this.userProgrammingLang[i].C == '맛보기 수준')
                        this.userProgrammingLang[i].C = 1
                    else if (this.userProgrammingLang[i].C == '초보 수준')
                        this.userProgrammingLang[i].C = 2
                    else if (this.userProgrammingLang[i].C == '실무 가능')
                        this.userProgrammingLang[i].C = 3
                    else if (this.userProgrammingLang[i].C == '나름 고수')
                        this.userProgrammingLang[i].C = 4
                   a.push(this.userProgrammingLang[i].C)
                };
                var options = {
                    chart: {
                        height: 350,
                        type: 'bar',
                        events: {
                            click: function (chart, w, e) {
                                // console.log(chart, w, e)
                            }
                        },
                    },
                    series: [{
                        name: 'C언어 수준',
                        data: a
                    }],
                        colors: colors,
                        plotOptions: {
                            bar: {
                                columnWidth: '45%',
                                distributed: true,
                                dataLabels: {
                                    position: 'top', // top, center, bottom
                                },
                            }
                        },
                        title: {
                            text: 'C언어',
                            align: 'center',
                            style: {
                                fontSize: '20px'
                            }
                        },
                        subtitle: {
                            text: '0 : 배운적 없음,  1 : 맛보기 수준,  2 : 초보 수준,  3 : 실무 가능,  4 : 나름 고수',
                            align: 'center',
                        },
                        dataLabels: {
                            enabled: true,
                            formatter: function (val) {
                                return val;
                            },
                            offsetY: -20,
                            align: 'top',
                            style: {
                                fontSize: '12px',
                                colors: ["#304758"]
                            }
                        },
                        xaxis: {
                            categories: b,
                            labels: {
                                style: {
                                    colors: colors,
                                    fontSize: '14px'
                                }
                            }
                        },
                        yaxis: {
                            axisBorder: {
                                show: false
                            },
                            axisTicks: {
                                show: false,
                            },
                            labels: {
                                show: false,
                                position: 'top',
                                formatter: function (val) {
                                    return val;
                                }
                            }
                    }
                }

                var chart = new ApexCharts(document.querySelector("#chart"), options);
                chart.render();
            },
            async finishJudge(){
                for(var i=0 ;i<this.stdList.length;i++){
                    if(this.stdList[i].YN==-1){
                        alert("합격여부를 모두 작성해 주세요.")
                        return 0;
                    }
                    this.judgeStdinfo.push({
                        stdApplyCoID : JSON.stringify(this.stdList[i].stdApplyCoID),
                        YN : this.stdList[i].YN,
                    })
                }
                await this.$http.post(Const.API_SERVER+'/co/mypage/changeYNApplyStd',{data:this.judgeStdinfo,cLoginID:this.user.loginId,applySemester:this.applySemester}).then((response)=>{
                    alert('합격 여부가 확정되었습니다.')
                })
                await this.$router.push({name: "Home"});
                await this.$http.post(Const.API_SERVER+'/mail/nodemailerTest',{cLoginID:this.user.loginId,applySemester:this.applySemester,applyOrder:this.applyOrder}).then((response)=>{
            })
            },
          changeStatus() {
              this.$http.post(Const.API_SERVER+'/co/mypage/changeCstatus',{cLoginID : this.user.loginId, applyOrder: this.applyOrder,applySemester:this.applySemester}).then((response)=>{
                  if(response.data == '0'){
                      alert('이미 지원 마감 상태입니다.')
                  }
                  else{
                      alert('지원이 마감 되었습니다.')
                  }
              })
          },
          loadCstatus(applyOrder, applySemester) {
              this.$http.get(Const.API_SERVER+'/co/mypage/loadCstatus',{params : {cLoginID : this.user.loginId, applyOrder: applyOrder,applySemester:applySemester}}).then((response)=>{
                  if(response.data.cStatus == 0){
                      this.cStatus = '심사중'
                  }
                  else if(response.data.cStatus == 1){
                      this.cStatus = '지원 마감'
                  }
              })
          },
            handleClickButton(){
                this.visible = !this.visible
            }
        }
    }
</script>

<style scoped>
  .img {
    height:100px;
    width:100px;
    border-radius: 50%;
    border-color: coral;
  }


  .section{
    padding-top:130px;
  }
</style>
