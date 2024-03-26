---
layout: "../../layouts/Base.astro"
title: "Set an IP address"
author: "ayai"
---

```
conf term
```

On a **switch** set the IP address on the VLAN 1 interface

```
interface vlan 1
```

On a **router** select the interface based on port the cable in connected to

```
interface Gig 0/0/0
```

To show what ports there are use `?` after the command

```
interface ?
```

If this is on a L3 switch then you have to also set the port as a router

```
no switchport
```

Furthermore you have to also enable routing on the switch

```
ip routing
```

Now set the IP address with the network mask

```
ip address 192.168.1.20 255.255.255.0
no shutdown
```

If the cable is connect into a SFP port you have to also set it

```
media-type sfp
```

Now you can exit the configuration of the interface

```
exit
```

You can now set the default gateway

```
ip default-gateway 192.168.1.1
```
