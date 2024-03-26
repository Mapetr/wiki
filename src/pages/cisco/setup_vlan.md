---
layout: "../../layouts/Base.astro"
title: "Setup VLAN"
author: "ayai"
---

## Setup router

Set the interface designated for your network with vlans to not shutdown and to not have an ip address.

```
interface gigabitEthernet 0/0/0
no shutdown
no ip address
```

On this interface you have to setup sub interfaces for each of your vlans. To better distinguish between these sub interfaces we set the vlan id as number for it. The interface will then be used as a trunk port into your network. You have to do this for all your vlans.

```
int gig 0/0/0.10
encapsulation dot1q 10
ip address 192.168.10.0 255.255.255.0
```

## Setup switch

To ensure that the frame can get to it’s destination you have add all the vlans that will pass through the switch, otherwise the frame will be dropped by the switch.

```
vlan 10
name VLAN10
```

### Setup the trunk port

When setting the trunk port on your switch you can also the allowed vlans. This will only allow the vlans that are in this list and others will get dropped by the switch.

```
int gig0/1
switchport mode trunk
switchport trunk allowed vlan 10,20,30
```

### Setup the access port

When setting the interface you can specify a range over which the settings will be applied. When setting the access port you have specify which vlan will be used on that port.

```
interface range fa0/1-24
switchport mode access
switchport access vlan 10
```
