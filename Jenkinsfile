pipeline {
    agent any
    stages {
        stage('Install node Packages') {

            steps {
                bat 'npm install'
            }
        }
        stage('Build Project') {

            steps {
                bat "npm run build"
            }
        }
        stage('Deploy Project To Tomcat') {
                steps {
                      bat "XCOPY \"C:\\Program Files (x86)\\Jenkins\\workspace\\angular-automation-local\\dist\\angularapp\\*\" \"C:\\apache-tomcat-9.0.1-windows-x64\\webapps\\angular-test-app\" /i /Y"
                }


        }


    }
}
