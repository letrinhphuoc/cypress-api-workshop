pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave Node1') {
                    agent {
                        label "api-node1"
                    }
                    steps {
                        git url: ''
                        sh 'npm install'
                        sh 'npm update'
                        sh 'npm run "$Script"'
                    }
                }
                stage('Slave Node2') {
                    agent {
                        label "api-node2"
                    }
                    steps {
                        git url: ''
                        sh 'npm install'
                        sh 'npm update'
                       sh 'npm run "$Script"'
                    }
                }
            }
        }
    }
}