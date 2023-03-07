import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Link from "next/link";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import config from "../config";

function Header(props) {
  const [searchResult, setSearchResult] = useState([]);
  const [cancelToken, setCancelToken] = useState(undefined);

  function searching(e) {
    var searchBarValue = document
      .querySelector(".search-bar input")
      .value.toLowerCase();
    if (searchBarValue.length < 2) setSearchResult([]);
    else {
      if (typeof cancelToken != typeof undefined) {
        cancelToken.cancel("canceling prev req");
      }
      var cancel = axios.CancelToken.source();
      setCancelToken(cancel);
      const baseUrl = config();
      axios
        .get(
          // `https://freedemyclient.herokuapp.com/search?search=${searchBarValue}`,
          // `https://freedemyclientapi.onrender.com/search?search=${searchBarValue}`,
          `${baseUrl}/search?search=${searchBarValue}`,
          { cancelToken: cancel.token }
        ) // heroku
        .then((data) => {
          setSearchResult(data.data);
        })
        .catch((e) => {
          return;
        });
    }
  }

  return (
    <div className="nav-bar">
      <div className="nav-bar-innercontainer">
        <p className="nav-logo">
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            FreeDemy
          </Link>
        </p>
        <p className="search-icon-mobile">
          <SearchIcon
            onClick={() => {
              document.querySelector("body").classList.add("clicked-search");
              document.querySelector(".search-bar input").focus();
              setSearchResult([]);
            }}
          />
        </p>

        <SearchBar data={searchResult} searching={searching} />
      </div>
    </div>
  );
}

export default Header;
