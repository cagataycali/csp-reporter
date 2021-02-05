package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	if r.Header.Get("Content-Type") == "application/csp-report" {
		bodyBytes, err := ioutil.ReadAll(r.Body)
		if err != nil {
			fmt.Println(err)
		}
		bodyString := string(bodyBytes)
		fmt.Println(bodyString)
		w.WriteHeader(http.StatusOK)
	} else {
		w.WriteHeader(http.StatusNotFound)
	}
}

func main() {
	http.HandleFunc("/", handler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
