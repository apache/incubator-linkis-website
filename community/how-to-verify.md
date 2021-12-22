---
title: How to Verify
sidebar_position: 4
---

# Verify the candidate version

For detailed check list, please refer to the official [check list](https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist)

## 1. Download the candidate version to be released to the local environment
```shell
#If there is svn locally, you can clone to the local
svn co https://dist.apache.org/repos/dist/dev/incubator/linkis/${release_version}-${rc_version}/
#or download the material file directly
wget https://dist.apache.org/repos/dist/dev/incubator/linkis/${release_version}-${rc_version}/xxx.xxx

```
## 2. Verify that the uploaded version is compliant
> Start the verification process, which includes but is not limited to the following content and forms

### 2.1 Check whether the release package is complete
> The package uploaded to dist must include the source code package, and the binary package is optional

1. Whether to include the source code package
2. Whether to include the signature of the source code package
3. Whether to include the sha512 of the source code package
4. If the binary package is uploaded, also check the contents listed in (2)-(4)

### 2.2 Check gpg signature
First import the publisher's public key. Import KEYS from the svn repository to the local environment. (The person who releases the version does not need to import it again, the person who helps to do the verification needs to import it, and the user name is enough for the person who issued the version)

- Import public key
```shell
curl https://dist.apache.org/repos/dist/dev/incubator/linkis/KEYS> KEYS # Download KEYS
gpg --import KEYS # Import KEYS to local
```
- Trust the public key
> Trust the KEY used in this version
```shell
    gpg --edit-key xxxxxxxxxx #KEY user used in this version
    gpg (GnuPG) 2.2.21; Copyright (C) 2020 Free Software Foundation, Inc.
    This is free software: you are free to change and redistribute it.
    There is NO WARRANTY, to the extent permitted by law.
    
    Secret key is available.
    gpg> trust #trust
    Please decide how far you trust this user to correctly verify other users' keys
    (by looking at passports, checking fingerprints from different sources, etc.)
    
      1 = I don't know or won't say
      2 = I do NOT trust
      3 = I trust marginally
      4 = I trust fully
      5 = I trust ultimately
      m = back to the main menu
    
    Your decision? 5 #choose 5
    Do you really want to set this key to ultimate trust? (y/N) y  #choose y
                                                                
    gpg>
         
```
- Use the following command to check the signature
```shell
  for i in *.tar.gz; do echo $i; gpg --verify $i.asc $i; done
  #or
  gpg --verify apache-linkis-${release_version}-src.tar.gz.asc apache-linkis-${release_version}-src.tar.gz
  # If you upload a binary package, you also need to check whether the signature of the binary package is correct
  gpg --verify apache-linkis-${release_version}-bin.tar.gz.asc apache-linkis-${release_version}-bin.tar.gz
```
- test result

> If something like the following appears, it means the signature is correct. Keyword: **`Good signature`**
```shell
    apache-linkis-xxx-incubating-src.tar.gz
    gpg: Signature made XXXX
    gpg: using RSA key XXXXX
    gpg: Good signature from "xxx @apache.org>"
```

### 2.3 Check sha512 hash
> After calculating the sha512 hash locally, verify that it is consistent with the dist. If you upload a binary package, you also need to check the sha512 hash of the binary package
> macOS/Linux

```shell
for i in *.tar.gz; do echo $i; gpg --print-md SHA512 $i; done
#or
for i in *.tar.gz; do echo $i; shasum -a 512 $i; done

#Compare the output content with the content of the apache-linkis-${release_version}-xxx.tar.gz.sha512 file

```


> Windows

```shell
$ certUtil -hashfile apache-linkis-${release_version}-xxx.tar.gz SHA512
#Compare the output content with the content of the apache-linkis-${release_version}-xxx.tar.gz.sha512 file
```


### 2.4. Check the file content of the source package

Unzip `apache-linkis-${release_version}-src.tar.gz` and check as follows:

- [ ] Check whether the source package contains unnecessary files, which makes the tar package too large
- [ ] Folder contains the word `incubating`
- [ ] There are `LICENSE` and `NOTICE` files
- [ ] There is a `DISCLAIMER` or `DISCLAIMER-WIP` file
- [ ] The year in the `NOTICE` file is correct
- [ ] Only text files exist, not binary files
- [ ] All files have ASF license at the beginning
- [ ] Able to compile correctly
- [ ] Check for extra files or folders, such as empty folders, etc.
- [ ] .....

### 2.5 Check the binary package (if the binary package is uploaded)
Unzip `apache-linkis-${release_version}-src.tar.gz` and check as follows:

- [ ] Folder contains the word `incubating`
- [ ] There are `LICENSE` and `NOTICE` files
- [ ] There is a `DISCLAIMER` or `DISCLAIMER-WIP` file
- [ ] The year in the `NOTICE` file is correct
- [ ] All text files have ASF license at the beginning
- [ ] Check the third-party dependent license:
- [ ] Compatible with third-party dependent licenses
- [ ] All third-party dependent licenses are named in the `LICENSE` file
- [ ] If you are relying on the Apache license and there is a `NOTICE` file, then these `NOTICE` files also need to be added to the version of the `NOTICE` file
- [ ] .....

 You can refer to this article: [ASF Third Party License Policy](https://apache.org/legal/resolved.html)
 
## 3. Email reply
If you initiate a posting vote, you can refer to this response example to reply to the email after verification

```html
+1 (xxxx)
I checked:
    1. All download links are valid
    2. Checksum and signature are OK
    3. LICENSE and NOTICE are exist
    4. Build successfully on macOS(Big Sur)
    5. ....
```