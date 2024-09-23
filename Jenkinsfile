pipeline {
    agent any

    environment {
        // Specify any environment variables you might need
        NODE_ENV = 'prod'
    }

    stages {
        stage('Checkout') {
            steps {
                // Check out the code from your repository
                checkout scm
            }
        }

        // stage('Install Node.js') {
        //     steps {
        //         // Install Node.js using nvm, n, or by directly installing the version you need
        //         sh 'curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -'
        //         sh 'sudo apt-get install -y nodejs'
        //     }
        // }

        stage('Install Dependencies') {
            steps {
                // Install the project dependencies
                sh 'npm install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                // Run your Playwright tests
                sh 'npx playwright test'
            }
        }

        stage('Publish Test Results') {
            steps {
                // Publish test results if you are using JUnit reporter with Playwright
                junit '**/test-results/*.xml'
            }
        }
    }

    post {
        always {
            // Clean up after the build
            cleanWs()
        }

        success {
            // Notify of success (e.g., send a message to Slack)
            echo 'Tests passed successfully!'
        }

        failure {
            // Notify of failure (e.g., send a message to Slack)
            echo 'Tests failed.'
        }
    }
}
