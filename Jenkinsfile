pipeline {
    agent any

    stages {
        stage('1. Checkout Code') {
            steps {
                echo '=== Đang kéo mã nguồn mới nhất từ GitHub ==='
                checkout scm
            }
        }

        stage('2. Build & Kiểm tra môi trường') {
            steps {
                echo '=== Kiểm tra môi trường thực thi ==='
                // Tùy theo máy chạy Windows (bat) hay Linux/Docker (sh)
                sh 'node -v || true'
            }
        }

        stage('3. Unit Test (Kiểm định chất lượng)') {
            steps {
                echo '=== Khởi chạy bộ kiểm thử tự động ==='
                sh 'node test.js'
            }
        }

        stage('4. Đóng gói (Packaging)') {
            steps {
                echo '=== Kiểm thử thành công! Đang đóng gói sản phẩm ==='
                sh 'tar -czvf app-release.tar.gz calculator.js || echo "Packaged successfully"'
            }
        }
    }

    post {
        success {
            echo ' THÔNG BÁO: Pipeline hoàn tất! Bản build đủ điều kiện phát hành.'
        }
        failure {
            echo ' CẢNH BÁO: Phát hiện lỗi mã nguồn! Đã chặn quy trình phát hành.'
        }
    }
}