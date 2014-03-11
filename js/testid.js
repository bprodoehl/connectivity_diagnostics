// Copyright 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview  Enum to represent tests.
 * @author ebeach@google.com (Eric Beach)
 */


goog.provide('ccd.TestId');


/**
 * Enum to store the unique identifier for each specific test that
 *   can be run.
 * @enum {number}
 */
ccd.TestId = {
  INTERNET_DISCONNECTED: 0,
  CHROME_VERSION: 1,
  CHROMEOS_VERSION: 2,
  //DNS_RESOLVER_PRESENT: 3,
  //CAPTIVE_PORTAL_DNS: 4,
  CAPTIVE_PORTAL_HTTP: 3,
  FIREWALL_80: 4,
  FIREWALL_443: 5,
  //RESOLVER_LATENCY: 8,
  HTTP_LATENCY: 6,
  //NIC_SIGNAL_STRENGTH: 7,
  // DNS_RESOLVER_LOCAL_POISONING: 9,
  // DNS_RESOLVER_PUBLIC_POISONING: 10,
  // NIC_NETWORK_AVAILABLE: 11,
  // NIC_CONNECTION_PRESENT: 12,
  // NIC_SIGNAL_STRENGTH: 13
  CONNECTIFY_STUN: 7
};
