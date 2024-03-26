---
layout: "../../layouts/Base.astro"
title: "Create a DHCP Pool"
author: "ayai"
---

```
conf term
```

Add excluded addresses of servers, switches and other statically set addresses

```
ip dhcp excluded-address 192.168.0.254
```

## Create a pool

Now create the pool

```
ip dhcp pool <name>
network 192.168.0.0 255.255.255.0
default-router 192.168.0.1
exit
```

To show leased IP addresses from pools

```
ip dhcp binding
```

To show all pools

```
ip dhcp pool
```

To show details about a pool

```
ip dhcp pool <name>
```

## Redirect to different DHCP server

In the interface from which you will be receiving your DHCP requests set the helper address that points to your DHCP server.

```
ip helper-address a.b.c.d
```
