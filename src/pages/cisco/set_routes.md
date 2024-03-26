---
layout: "../../layouts/Base.astro"
title: "Set routes"
author: "ayai"
---

```
conf term
```

Add the route as network address, network mask and interface. Network 0.0.0.0/0 is considered a **default route**, whereas when you specify a network it is called a **static route**.

```
ip route 0.0.0.0 0.0.0.0 gig 0/0/0
exit
```

Show all the routes on a device

```
ip route
```
