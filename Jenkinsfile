pipeline {
    agent any

    stages {
        stage('1. Checkout Code') {
            steps {
                echo '=== Dang keo ma nguon moi nhat tu GitHub ==='
                checkout scm
            }
        }

        stage('2. Build & Kiem tra moi truong') {
            steps {
                echo '=== Kiem tra moi truong Node.js tren Windows ==='
                bat 'node -v'
            }
        }

        stage('3. Unit Test (Kiem dinh chat luong)') {
            steps {
                echo '=== Khoi chay bo kiem thu tu dong ==='
                bat 'node test.js'
            }
        }

        stage('4. Dong goi (Packaging)') {
            steps {
                echo '=== Kiem thu thanh cong! Dang dong goi san pham ==='
                bat 'tar -czvf app-release.tar.gz calculator.js'
            }
        }
    }

    post {
        success {
            echo ' THONG BAO: Pipeline thanh cong! San pham dat tieu chuan phat hanh.'
        }
        failure {
            echo ' CANH BAO: Ma nguon co loi! Quy trinh bi chan dung.'
        }
    }
}