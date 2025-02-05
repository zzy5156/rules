function FindProxyForURL(url, host) {
  if (isPlainHostName(host) ||
      shExpMatch(host, "*.local") ||
      isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
      isInNet(dnsResolve(host), "172.16.0.0", "255.240.0.0") ||
      isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0") ||
      isInNet(dnsResolve(host), "127.0.0.0", "255.255.255.0") ||
      shExpMatch(host, "jd.com") ||
      shExpMatch(host, "*.jd.com") ||
      shExpMatch(host, "360buyimg.com") ||
      shExpMatch(host, "*.360buyimg.com")) {
    return "DIRECT";
  }
  return "PROXY 192.168.0.1:7890; DIRECT";
}
