# Project: Deploying Inc42 Medium Project on AWS EKS Cluster using Terraform and Jenkins

This project aims to deploy the Inc42 medium project on an AWS Elastic Kubernetes Service (EKS) cluster using Terraform for infrastructure provisioning, Jenkins for continuous integration and continuous deployment (CI/CD), and Argo CD for application deployment within the Kubernetes cluster.

## Completion Steps

### Step 1: Setup Terraform and Configure AWS

Ensure Terraform is installed on your local machine and configure AWS credentials.

### Step 2: Building Infrastructure with Terraform

Utilize Terraform to create a base instance, referred to as the Jenkins server, on AWS.

### Step 3: Setup Sonarqube and Jenkins

Set up Sonarqube for code quality analysis and configure Jenkins for CI/CD pipelines.

### Step 4: CI/CD Pipeline for Docker Image

Implement CI/CD pipelines in Jenkins to build and push Docker images to Docker Hub.

### Step 5: Update Image Name in Deployment Repository

Update the Docker image name in the deployment repository to reflect the changes made during the CI/CD process.

### Step 6: EKS Cluster Creation

Provision an AWS EKS cluster using Terraform to serve as the deployment environment for the Inc42 medium project.

### Step 7: Install Argo CD

Install Argo CD within the EKS cluster to manage the deployment of applications.

### Step 8: Deploy Application with Argo CD

Configure Argo CD to deploy the Inc42 medium project using the deployment repository.

## Repositories

- **Main Project with Jenkins File**: [https://github.com/ShaikhAhmed7172/inc42_project.git](https://github.com/ShaikhAhmed7172/inc42_project.git)
  
- **Deployment Repositories for Argo CD**: [https://github.com/ShaikhAhmed7172/project_deployment.git](https://github.com/ShaikhAhmed7172/project_deployment.git)

## Conclusion

By following these completion steps, the Inc42 medium project will be successfully deployed on an AWS EKS cluster using Terraform for infrastructure management, Jenkins for CI/CD pipelines, and Argo CD for application deployment. This streamlined approach ensures efficient development, testing, and deployment processes for the project.
