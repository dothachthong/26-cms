<?xml version="1.0" encoding="utf-8"?>
<assembly xmlns="urn:schemas-microsoft-com:asm.v3" manifestVersion="1.0" description="Fix for KB4512506" displayName="default" company="Microsoft Corporation" copyright="Microsoft Corporation" supportInformation="http://support.microsoft.com/?kbid=4512506" creationTimeStamp="2019-08-08T01:20:30Z" lastUpdateTimeStamp="2019-08-08T01:20:30Z">
	<assemblyIdentity name="Package_260_for_KB4512506" version="6.1.1.9" language="neutral" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35"/>
	<package identifier="KB4512506" releaseType="Security Update" restart="possible" psfName="Windows6.1-KB4512506-x64.psf">
		<parent buildCompare="EQ" serviceCompare="EQ" integrate="separate" disposition="detect">
			<assemblyIdentity name="Microsoft-Windows-InternetExplorer-LanguagePack" language="ro-RO" version="11.2.9600.16428" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" buildType="release"/>
		</parent>
		<installerAssembly name="Microsoft-Windows-ServicingStack" version="6.0.0.0" language="neutral" processorArchitecture="amd64" versionScope="nonSxS" publicKeyToken="31bf3856ad364e35"/>
		<update name="4512506-1034_neutral_LDR">
			<applicable disposition="staged">
				<updateComponent elevate="serviceLevel">
					<assemblyIdentity name="Microsoft-Windows-Scripting-JScript9.Resources" version="11.