<%@ Page Language="C#" AutoEventWireup="true" CodeFile="task3.aspx.cs" Inherits="pages_task3" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <link rel="stylesheet" href="../styles/task3_style.css">
</head>
<body>
    <form id="form1" runat="server">
        <h1>C# cypher</h1>
        <p>
            uses c# on the backend to cypher and decypher your secrets</p>
        <p>
            <asp:Label ID="Label1" runat="server" Text="Secret"></asp:Label>
        </p>
        <p>
            <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
&nbsp;</p>
        <p>
            <asp:Label ID="Label2" runat="server" Text="Secret code"></asp:Label>
        </p>
        <p>
            <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
&nbsp;</p>
        <p>
            <asp:Label ID="Label3" runat="server" Text="Output:"></asp:Label>
        </p>
        <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Cypher" />
        <asp:Button ID="Button2" runat="server" OnClick="Button2_Click" Text="Decypher" />
    </form>
</body>
</html>
