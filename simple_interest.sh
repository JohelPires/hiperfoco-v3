#!/bin/bash

# Simple Interest Calculator

echo "Simple Interest Calculator"

# Read principal amount
read -p "Enter the principal amount: " principal

# Read interest rate
read -p "Enter the interest rate (in percentage): " rate

# Read time period
read -p "Enter the time period (in years): " time

# Calculate simple interest
interest=$(echo "scale=2; $principal * $rate * $time / 100" | bc)

# Display the result
echo "The simple interest is: $interest"
