/*

  Web client

 This sketch connects to a website (http://www.google.com)

 using a WiFi shield.

 This example is written for a network using WPA encryption. For

 WEP or WPA, change the Wifi.begin() call accordingly.

 This example is written for a network using WPA encryption. For

 WEP or WPA, change the Wifi.begin() call accordingly.

 Circuit:

 * WiFi shield attached

 created 13 July 2010

 by dlf (Metodo2 srl)

 modified 31 May 2012

 by Tom Igoe

 */

#include <SPI.h>
#include <WiFi.h>

char ssid[] = "snelteststraat"; //  your network SSID (name)
char pass[] = "henlohenlo";    // your network password (use for WPA, or use as key for WEP)
int keyIndex = 0;            // your network key Index number (needed only for WEP)

int status = WL_IDLE_STATUS;
// if you don't want to use DNS (and reduce your sketch size)
// use the numeric IP instead of the name for the server:
IPAddress server(192,168,137,10);  // numeric IP for Google (no DNS)
//char server[] = "www.google.com";    // name address for Google (using DNS)

// Initialize the Ethernet client library
// with the IP address and port of the server
// that you want to connect to (port 80 is default for HTTP):

WiFiClient client;

void setup() {
  //Initialize serial and wait for port to open:
  Serial.begin(9600);
  pinMode(8, INPUT);

  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }

  // check for the presence of the shield:
  if (WiFi.status() == WL_NO_SHIELD) {
    Serial.println("WiFi shield not present");

    // don't continue:
    while (true);
  }

  String fv = WiFi.firmwareVersion();
  if (fv != "1.1.0") {
    Serial.println("Please upgrade the firmware");
  }

  // attempt to connect to Wifi network:
  while (status != WL_CONNECTED) {
    Serial.print("Attempting to connect to SSID: ");
    Serial.println(ssid);

    // Connect to WPA/WPA2 network. Change this line if using open or WEP network:
    status = WiFi.begin(ssid, pass);
    // wait 10 seconds for connection:
    delay(10000);
  }

  Serial.println("Connected to wifi");
  printWifiStatus();
  Serial.println("Waiting for user input");
}

void loop() {
  if (digitalRead(8) == LOW) {
    sendPostRequest();
    while (digitalRead(8) == LOW);
  }
  
  // if there are incoming bytes available
  // from the server, read them and print them:
  while (client.available()) {
    char c = client.read();
    Serial.write(c);
  }
}

void printWifiStatus() {
  // print the SSID of the network you're attached to:
  Serial.print("SSID: ");
  Serial.println(WiFi.SSID());

  // print your WiFi shield's IP address:
  IPAddress ip = WiFi.localIP();
  Serial.print("IP Address: ");
  Serial.println(ip);

  // print the received signal strength:
  long rssi = WiFi.RSSI();
  Serial.print("signal strength (RSSI):");
  Serial.print(rssi);
  Serial.println(" dBm");
}

void sendPostRequest() {
  Serial.println("\nStarting http connection to server...");

  // if you get a connection, report back via serial:
  if (client.connect(server, 8080)) {
    Serial.println("http connected to server");

    // Make a HTTP request:
    client.println("POST /");
    client.println("Host: 192.168.137.10");
    client.println("Connection: close");
    client.println();
    
    while (client.available()) {
      char c = client.read();
      Serial.write(c);
    }
    if (!client.connected()) {
      client.stop();
      while (true);
    }
  }
}
