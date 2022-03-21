// Copyright (c) 2022 Joanne Santhosh All rights reserved
//
// Created by: Joanne Santhosh
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * This function gets users first name and age and shows it back to user.
 */
function enterClicked() {
  // input
  const StreetNumber = document.getElementById("street-number").value
  const StreetName = parseInt(document.getElementById("street-name-entered").value)

  // output
  document.getElementById("address").innerHTML =
    "Your info is: " + streetNumber + ", street-number" + StreetName + "street-name"
}