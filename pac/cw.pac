// 黑名单域名列表（可自行扩展）
var blacklist = [
  "jd.com",
  "*.jd.com",
  "360buyimg.com",
  "*.360buyimg.com",
];

function FindProxyForURL(url, host) {
  // 不代理局域网请求
  if (isPlainHostName(host) ||  // 无域名主机
      shExpMatch(host, "*.local") ||  // 本地域名
      isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||  // A类私有地址
      isInNet(dnsResolve(host), "172.16.0.0", "255.240.0.0") ||  // B类私有地址
      isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0") ||  // C类私有地址
      isInNet(dnsResolve(host), "127.0.0.0", "255.255.255.0")) {  // 环回地址
    return "DIRECT";
  }

  // 检查黑名单域名
  for (var i = 0; i < blacklist.length; i++) {
    if (shExpMatch(host, blacklist[i])) {
      return "DIRECT";
    }
  }

  // 其他请求走代理（需修改为您的代理地址）
  return "PROXY 192.168.0.1:7890; DIRECT";
}
