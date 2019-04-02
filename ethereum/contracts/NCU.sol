pragma solidity ^0.4.21;

import "./SafeMath.sol";
import "./IERC20.sol";

contract ERC20 is IERC20 {
    using SafeMath for uint256;
    
    event Burn(address account, uint256 tokens);
    
    string public constant name = "NCUtest token";
    uint8 public constant decimals = 18;
    string public constant symbol = "NCUTT";
    
    
    address public owner;
    mapping (address => bool) public minters;
    uint256 private _totalSupply;
    mapping(address => uint256) _balances;
    mapping(address => mapping(address => uint256)) _approve;
    
    function ERC20 (address manager) public {
        owner = manager;
    }
    
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
    
    function addMinter(address addr) public onlyOwner returns (bool) {
        minters[addr] = true;
        return true;
    }
    
    function mint(address to, uint256 tokens) public returns (bool) {
        require(minters[to]);
        // 增加 total supply
        _totalSupply = _totalSupply.add(tokens);
        // 轉移新增出來的 token 到某人身上
        _balances[to] = _balances[to].add(tokens);
        emit Transfer ( address(0), to, tokens);
        return true;
    }
    
    function burn(uint256 tokens) public returns (bool) {
        // 檢查夠不夠燒
        require(tokens <= _balances[msg.sender]);
        // 減少 total supply
        _totalSupply = _totalSupply.sub(tokens);
        // 減少 msg.sender balance
        _balances[msg.sender] = _balances[msg.sender].sub(tokens);
        
        emit Burn(msg.sender, tokens);
        emit Transfer(msg.sender, address(0), tokens);
        return true;
    }
    
    // 所有存在的 Token 數量
    function totalSupply() external view returns (uint256) {
        return _totalSupply;
    }
    
    // 讀取 tokenOwner 這個 address 所持有的 Token 數量
    // address => uint256
    function balanceOf(address tokenOwner) external view returns (uint256 balance) {
        return _balances[tokenOwner];
    }
    
    // 從 msg.sender 轉 tokens 個 Token 給 to 這個 address
    // msg.sender ---tokens---> to 
    function transfer(address to, uint256 tokens) external returns (bool success) {
        return _transfer(msg.sender, to, tokens);
    }
    
    // 得到 tokenOwner 授權給 spender 使用的 Token 剩餘數量
    function allowance(address tokenOwner, address spender) external view returns (uint256 remaining) {
        return _approve[tokenOwner][spender];
    }
  
    // tokenOwner -> spender -> tokens
    // address => address => uint256
    // msg.sender 授權給 spender 可使用自己的 tokens 個 Token
    function approve(address spender, uint256 tokens) external returns (bool success) {
        _approve[msg.sender][spender] = tokens;
        emit Approval(msg.sender, spender, tokens);
        return true;
    }

    // 將 tokens 個 Token 從 from 轉到 to
    function transferFrom(address from, address to, uint256 tokens) external returns (bool success) {
        _approve[from][msg.sender] = _approve[from][msg.sender].sub(tokens);
        
        return _transfer(from, to, tokens);
    }
    
    function _transfer(address from, address to, uint256 tokens) internal returns (bool success) {
        _balances[from] = _balances[from].sub(tokens);
        _balances[to] = _balances[to].add(tokens);
        emit Transfer(from, to, tokens);
        return true;
    }
}


contract DepartmentFactory {
    
    address[] public deployedDepartments;
    address public tokenAddress=0x0;
    ERC20 public token;
    
    function DepartmentFactory ()public{
        token = new ERC20(msg.sender);
        tokenAddress = address(token);
    }
    
    function createDepartment(string department) public {
        address newDepartment = new Department(tokenAddress, msg.sender,department);
        deployedDepartments.push(newDepartment);
    }
    
    function getDeployedDepartments() public view returns (address[]) {
        return deployedDepartments;
    }
}


contract Department {

    struct Person {
        string id;
        string name;
        string job;
        string media;
        string email;
        
        bool isApproved;
        address updator;
    }
    
    struct Post {
        string hash;
        string time;
    }
    
    uint public id_level = 1;
    uint public name_level = 1;
    uint public job_level = 1;
    uint public media_level = 1;
    uint public email_level = 1;
    
    string departmentName;
    Person[] public persons;
    Post[] public posts; 
    uint personCount;
    address public manager;
    ERC20 public ncuToken;
    
    modifier onlyManager() {
        require(msg.sender == manager);
        _;
    }
    
    function Department(address tokenAddress, address creator,string department) public {
        manager = creator;
        ncuToken = ERC20(tokenAddress);
        departmentName = department;
    }
    
    function contribute() public payable{
        require(msg.value>0);
        ncuToken.mint(msg.sender,msg.value);
    }
    
    function createPost(string hash, string time) public onlyManager{
        Post memory newPost = Post({
            hash: hash,
            time: time
        });
        
        
        posts.push(newPost);
    }
    
    function createPerson(string id, string name, string job, string media, string email) public {
        Person memory newPerson = Person({
            id: id,
            name: name,
            job: job,
            media: media,
            email: email,
            isApproved: false,
            updator: msg.sender
        });
        
        
        persons.push(newPerson);
        //ncuToken.mint(msg.sender,100);
    }
    
    function updatePerson(uint index, string id, string name, string job, string media, string email) public {
        Person storage person = persons[index];
        require(person.isApproved);
        
        person.id = id;
        person.name = name;
        person.job = job;
        person.media = media;
        person.email = email;
        person.isApproved = false;
        person.updator = msg.sender;
        
        //ncuToken.mint(msg.sender,50);
    }
    
    function approvePerson(uint index) public onlyManager {
        Person storage person = persons[index];
        require(!person.isApproved);
        person.isApproved = true;
        uint coins = id_level*10+name_level*10+job_level*10+media_level*10+email_level*10;
        ncuToken.mint(person.updator,coins);
    }
    
    function rejectPerson(uint index) public onlyManager {
        Person storage person = persons[index];
        require(!person.isApproved);
        person.isApproved = true;
    }
    
    function changeLevel(uint id, uint name, uint job ,uint media, uint email) public onlyManager {
        id_level = id;
        name_level = name;
        job_level = job;
        media_level = media;
        email_level = email;
    }

    function getSummary() public view returns (string, uint, address) {
        return (
            departmentName,
            personCount,
            manager
        );
    }

    function getPersonCount() public view returns (uint) {
        return persons.length;
    }
    
}